const results = {
  high_risk_patients: ["DEMO002", "DEMO031"],
  fever_patients: ["DEMO005", "DEMO021"],
  data_quality_issues: ["DEMO004", "DEMO007"]
};

fetch('https://assessment.ksensetech.com/api/submit-assessment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'ak_86c19b8f85ddbfd82e99f7e3b924814ca71aabe9fad20d62'
  },
  body: JSON.stringify(results)
})
.then(response => response.json())
.then(data => {
  console.log('Assessment Results:', data);
});