import React from "react";

interface ReportFooterProps {
  receptionist: string;
  thankYouMessage: string;
}

const ReportFooter: React.FC<ReportFooterProps> = ({ receptionist, thankYouMessage }) => (
  <div className="text-center text-sm text-gray-600 space-y-2">
    <div>
      <span className="font-medium">Receptionist</span>: {receptionist}
    </div>
    <div className="font-medium">{thankYouMessage}</div>
  </div>
);

export default ReportFooter;

// minor logic update 4675
