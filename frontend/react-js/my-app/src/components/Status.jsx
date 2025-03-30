function StatusMessage({ status }) {
    switch (status) {
      case "loading":
        return <p>Loading...</p>;
      case "success":
        return <p>Data loaded successfully!</p>;
      case "error":
        return <p>Error loading data.</p>;
      default:
        return <p>Unknown status.</p>;
    }
  }

  export default StatusMessage