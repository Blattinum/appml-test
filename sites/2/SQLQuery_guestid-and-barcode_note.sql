/******   ******/
SET NOCOUNT ON

SELECT REPLACE(REPLACE(REPLACE(barcode_note, ' ', '') , CHAR(13)+CHAR(10), ''), CHAR(9), '') As b, REPLACE(REPLACE(REPLACE(barcode_guestid, ' ', '') , CHAR(13)+CHAR(10), ''), CHAR(9), '') As g

/*SELECT barcode_note As b, barcode_guestid As g*/

/* barcode_guestid */
FROM [Guestworld].[dbo].[tbl_barcode] FOR JSON AUTO;



