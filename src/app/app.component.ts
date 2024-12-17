import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgArrayPipesModule } from 'ngx-pipes';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, NgArrayPipesModule, MatIconModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Smart Navigation';
  searchText = '';
  tradingPrograms = [
    {
        "Id": "677bd387-6411-487e-9408-89728481a35f",
        "TradingPartnerName": "Sigma Solutions Inc.",
        "TradingProgramId": "TP579",
        "TradingProgramReference": "Sigma Solutions Inc. - TP579",
        "TradingProgramStartDate": "2024-03-01",
        "TradingProgramEndDate": "2024-09-30",
        "TradingProgramName": "Sigma Solutions Inc. - TP579 - 2024",
        "ProgramLines": [
            {
                "ProgramLineId": "PL012",
                "ProgramLineType": "Loop",
                "ProgramLineName": "Sigma Solutions Inc. - Sigma Solutions Inc. - TP579 - 2024 - Loop",
                "ProgramLineReference": "PL012",
                "ProgramLineStartDate": "2024-03-01",
                "ProgramLineEndDate": "2024-09-30",
                "Mechanism": "Fixed",
                "FixedRate": null,
                "FixedAmount": 10000,
                "Inclusion": {
                    "Dimension": "Product",
                    "Reference": "P0010",
                    "Name": "Snapper",
                    "Dimension2": "Customer",
                    "Reference2": "C0010",
                    "Name2": "Alice Cooper"
                }
            }
        ]
    },
    {
        "Id": "f2e2e42d-1377-405c-8f5c-1bdbaa1e9c6a",
        "TradingPartnerName": "Sigma Solutions Inc.",
        "TradingProgramId": "TP321",
        "TradingProgramReference": "Sigma Solutions Inc. - TP321",
        "TradingProgramStartDate": "2024-01-01",
        "TradingProgramEndDate": "2024-03-31",
        "TradingProgramName": "Sigma Solutions Inc. - TP321 - 2024",
        "ProgramLines": [
            {
                "ProgramLineId": "PL001",
                "ProgramLineType": "Conditional",
                "ProgramLineName": "Sigma Solutions Inc. - Sigma Solutions Inc. - TP321 - 2024 - Conditional",
                "ProgramLineReference": "PL001",
                "ProgramLineStartDate": "2024-01-01",
                "ProgramLineEndDate": "2024-03-31",
                "Mechanism": "Fixed",
                "FixedRate": null,
                "FixedAmount": 10000,
                "Inclusion": {
                    "Dimension": "Product",
                    "Reference": "P0003",
                    "Name": "Cilantro",
                    "Dimension2": "Customer",
                    "Reference2": "C0004",
                    "Name2": "Cheryl Blossom"
                }
            }
        ]
    },
    {
      "Id": "2e56adbe-1138-4c74-aad5-e4c3f3a68b2f",
      "TradingPartnerName": "Zeta Capital Partners",
      "TradingProgramId": "TP594",
      "TradingProgramReference": "Zeta Capital Partners - TP594",
      "TradingProgramStartDate": "2024-09-01",
      "TradingProgramEndDate": "2024-12-31",
      "TradingProgramName": "Zeta Capital Partners - TP594 - 2024",
      "ProgramLines": [
          {
              "ProgramLineId": "PL011",
              "ProgramLineType": "Function",
              "ProgramLineName": "Zeta Capital Partners - Zeta Capital Partners - TP594 - 2024 - Function",
              "ProgramLineReference": "PL011",
              "ProgramLineStartDate": "2024-09-01",
              "ProgramLineEndDate": "2024-12-31",
              "Mechanism": "Fixed",
              "FixedRate": 5,
              "FixedAmount": null,
              "Inclusion": {
                  "Dimension": "Product",
                  "Reference": "P0005",
                  "Name": "Coconut",
                  "Dimension2": "Customer",
                  "Reference2": "C0009",
                  "Name2": "Jughead"
              }
          }
      ]
  },
  {
      "Id": "802f1474-de9b-4d13-b3b2-69fb807e7aaa",
      "TradingPartnerName": "Omega Trading Group",
      "TradingProgramId": "TP987",
      "TradingProgramReference": "Omega Trading Group - TP987",
      "TradingProgramStartDate": "2024-01-01",
      "TradingProgramEndDate": "2024-03-31",
      "TradingProgramName": "Omega Trading Group - TP987 - 2024",
      "ProgramLines": [
          {
              "ProgramLineId": "PL006",
              "ProgramLineType": "Print",
              "ProgramLineName": "Omega Trading Group - Omega Trading Group - TP987 - 2024 - Print",
              "ProgramLineReference": "PL006",
              "ProgramLineStartDate": "2024-01-01",
              "ProgramLineEndDate": "2024-03-31",
              "Mechanism": "Fixed",
              "FixedRate": null,
              "FixedAmount": 10000,
              "Inclusion": {
                  "Dimension": "Product",
                  "Reference": "P0005",
                  "Name": "Coconut",
                  "Dimension2": "Customer",
                  "Reference2": "C0002",
                  "Name2": "Archie Andrews"
              }
          }
      ]
    }
  ];

  onClick(){

  }
}
