useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/users/octocat`;
      const method = 'GET';
  
      const response = await fetch(url, {
        method: method,
      });
  
      const data = await response.json();
  
      // Update the state of your application with the data from the response.
    };
  
    fetchData();
  }, []);