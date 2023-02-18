SELECT address FROM trades, balances WHERE trades.block_height > 730000 AND SUM(CASE WHEN denom='usdc' THEN balances.balance/1000000 ELSE 0) + 
SUM(CASE WHEN denom='swth' THEN balances.balance/20000000 ELSE 0) +
SUM(CASE WHEN denom='tmz' THEN balances.balance/333.33 ELSE 0) >= 500 
GROUP BY address
