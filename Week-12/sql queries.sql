-- Find the item that has minimum weight
SELECT ITEMNO, DESCRIPTION, WEIGHT 
FROM ITEMS 
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- Find the different warehouses in “Pune”
SELECT WAREHOUSES.WNAME 
FROM WAREHOUSES  
WHERE WAREHOUSES.CITY_ID=(SELECT CITY_ID FROM CITIES WHERE CITY="PUNE");

-- Find the details of items ordered by a customer “Mr. Patil”
SELECT o.orderno,c.cname, o.orderdate, i.itemno, i.description, i.weight, i.cost, oi.ordered_quantity
FROM customer c
JOIN orders o ON c.cno = o.cno
JOIN order_items oi ON o.orderno = oi.orderno
JOIN items i ON oi.itemno = i.itemno
WHERE c.cname = 'Mr. Patil';

-- Find a Warehouse which has maximum stores
SELECT warehouses.wname, COUNT(stores.sid) as num_stores
FROM warehouses
INNER JOIN stores ON warehouses.wid = stores.wid
GROUP BY warehouses.wid
ORDER BY num_stores DESC
LIMIT 2;

-- Find an item which is ordered for a minimum number of times.
SELECT items.itemno, items.description, MIN(store_items.item_quantity) as min_of_item_quantity
FROM store_items
JOIN items ON store_items.itemno = items.itemno
GROUP BY items.itemno
HAVING MIN(store_items.item_quantity) limit 1;

-- Find the detailed orders given by each customer.
SELECT o.cno, c.cname, o.orderno, i.itemno, i.description, i.weight, i.cost, oi.ordered_quantity
FROM customer c
JOIN orders o ON c.cno = o.cno
JOIN order_items oi ON o.orderno = oi.orderno
JOIN items i ON oi.itemno = i.itemno
ORDER BY c.cno, o.orderno;


