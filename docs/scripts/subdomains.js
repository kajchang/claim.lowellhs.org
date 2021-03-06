fetch('https://raw.githubusercontent.com/kajchang/lowellhs.org/master/hosts.json')
    .then(res => res.json())
    .then(hosts => {
        hosts.filter(host => host.HostName !== '@' && host.HostName !== 'claim').forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="http://${ project.HostName }.lowellhs.org" rel="noopener" target="_blank">${ project.HostName }.lowellhs.org</a>`;
            document.getElementById('subdomains').appendChild(li);
        });
    });
