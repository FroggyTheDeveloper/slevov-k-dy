import json

with open("new_discounts.json", "r", encoding="utf-8") as file:
    new_discounts = json.load(file)

print(new_discounts)

with open("discounts.json", "w", encoding="utf-8") as file:
    json.dump(new_discounts, file, indent=4, ensure_ascii=False)