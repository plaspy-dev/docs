---
slug: /tzone/tz_bc05/features
id: tz_bc05-features
sidebar_label: Features
title: TZone - TZ-BC05 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the TZone TZ-BC05 iBeacon tracker and how its Bluetooth capabilities can be used with Plaspy for presence and proximity tracking
keywords:
  - TZone TZ-BC05
  - TZ-BC05 features
  - TZone tracker
  - TZ BC05 GPS tracker
  - TZ-BC05 Bluetooth tracker
  - iBeacon tracker
  - Plaspy compatible tracker
  - Bluetooth low energy tracker
  - asset tracker Plaspy
  - TZ-BC05 capabilities
---

# TZone - TZ-BC05 Features

This page describes the publicly available feature context for using the TZone TZ-BC05 with Plaspy. It summarizes the tracker capabilities that are relevant to Plaspy users, focusing on practical behavior, device attributes, and how broadcasts from the TZ-BC05 can be reflected in the Plaspy platform when the device is integrated or its signals are forwarded into the system.

Exact feature availability and behavior can vary with firmware version, hardware revision, installation type, and the manufacturer implementation. Where useful, this page calls out the device features provided in the manufacturer description, but you should verify device specific details with the official TZone documentation and any local integration guides.

## Feature Overview

The TZ-BC05 is a compact Bluetooth iBeacon tracker intended for presence and proximity use cases rather than standalone satellite positioning. Its small size and long battery life make it suitable for tagging personal items, equipment, or other assets that benefit from periodic beacon broadcasts. The device broadcasts using the iBeacon protocol over Bluetooth 4.0 and supports a range of configurable broadcast settings to balance detection range and battery life.

- Small and discreet form factor for easy attachment or placement
- Uses iPhone iBeacon protocol on Bluetooth 4.0 for proximity broadcasts
- Adjustable broadcast interval and transmitted power to tune range versus battery life
- Long battery life using a CR 2477 cell with multi year expected working time
- Password protected connection to limit access to the device settings

## Core Features of TZone - TZ-BC05

- iBeacon protocol support using Bluetooth 4.0 for beacon style presence broadcasts
- Compact dimensions approximately 45 x 45 x 21 mm and lightweight design
- Compatible with modern smartphones including iOS 7.0 and later and Android 4.3 and later
- CR 2477 battery for extended operating time with an estimated 1.5 to 2.5 years of working time
- Adjustable broadcasting interval configurable between 0.1 and 3 seconds
- Adjustable transmitted power settings to influence detection distance
- Reported open field transmission distance in the range of 50 to 143 meters
- Password protection for connection settings to restrict unauthorized changes

## How These Features Work with Plaspy

When the TZ-BC05 broadcasts are made available to Plaspy through a compatible integration, gateway, or data forwarder, Plaspy can surface presence and asset information derived from those broadcasts. Plaspy provides a centralized view where broadcasts and device metadata can be associated with assets, allowing teams to use beacon data alongside other tracked devices.

- Show device presence and last seen timestamps for each TZ-BC05 asset in Plaspy
- Record broadcast events so operators can see when an item was detected by the platform
- Use broadcast interval and transmit power settings to tune detection behavior for Plaspy monitoring
- Attach descriptive metadata such as model, serial number, and assigned owner to each device record
- Group and search beacon devices within Plaspy to support inventory and proximity workflows

## Typical Use Cases

- Tagging personal items such as bags or luggage for presence monitoring
- Tracking tools and small equipment in workshops or job sites using beacon detections
- Managing inventory or pallets inside facilities where proximity beacons assist locating items
- Adding beacon based location context to larger asset management workflows
- Using beacons to mark fixed points or zones that help other systems determine nearby assets

## Feature Availability Notes

- Broadcast range figures are open field estimates; real world range varies with environment and obstructions
- Configurable settings such as broadcast interval and transmit power may depend on device firmware and the companion configuration app
- Battery life estimates are approximate and depend on chosen broadcast settings and environmental factors
- Smartphone compatibility may affect which mobile utilities can read or configure the device
- Manufacturer hardware revisions or firmware updates can add, change, or remove capabilities over time

## Why Use Plaspy with These Features

Plaspy provides a single platform to record, search, and manage beacon equipped assets alongside other tracked devices. For organizations that need visibility into presence, recent detections, and asset grouping, integrating TZ-BC05 broadcasts into Plaspy helps keep beacon data useful and actionable in a broader operational context. The TZ-BC05’s adjustable interval and power settings let teams tune detection for the workflows and battery life targets they need.

Learn more about how Plaspy can centralize presence and proximity data at https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time, so please verify the latest device specific information on the official TZone site at http://www.tzonedigital.com/ before making deployment decisions.
