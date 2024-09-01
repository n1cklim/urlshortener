document.getElementById('url-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    
    const originalUrl = document.getElementById('original-url').value;

    
    if (!originalUrl) {
        document.getElementById('result').textContent = 'Please enter a valid URL.';
        return;
    }

    try {
        
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(originalUrl)}`);

        
        const data = await response.json();

        
        if (data.ok) {
            
            document.getElementById('result').innerHTML = `
                Shortened URL: <a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link}</a>
            `;
        } else {
            
            document.getElementById('result').textContent = 'Failed to shorten URL. Please try again.';
        }
    } catch (error) {
        
        document.getElementById('result').textContent = 'An error occurred. Please try again later.';
    }
});
