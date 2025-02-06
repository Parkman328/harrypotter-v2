import * as XLSX from 'exceljs';
import type { LeaderboardEntry } from '../../types/leaderboard';

export const exportToExcel = (data: LeaderboardEntry[], filename: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Leaderboard');
  XLSX.writeFile(workbook, filename);
};