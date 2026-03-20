---
slug: /careu/ugo/features
id: ugo-features
sidebar_label: Features
title: CAREU - Ugo Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the CAREU Ugo OBD II GPS tracker and how it works with Plaspy for vehicle tracking and fleet telemetry
keywords:
  - CAREU Ugo
  - CAREU Ugo features
  - CAREU Ugo GPS tracker
  - OBD II tracker
  - vehicle tracking
  - driver behavior detection
  - fleet management tracker
  - Plaspy compatible tracker
  - eSIM OBD tracker
  - FOTA firmware updates
---

# CAREU - Ugo Features

This page describes the public feature context for using the CAREU Ugo OBD II GPS tracker with Plaspy. It summarizes the tracker capabilities relevant to real time vehicle tracking, OBD II telemetry, driving event detection, and remote management when the device is deployed with the Plaspy platform.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional SKU, installation method, and manufacturer configuration. Use this page as a practical overview and consult the manufacturer documentation for device specific details and the latest firmware capabilities.

## Feature Overview

The CAREU Ugo is a plug and play OBD II tracker designed for rapid deployment and continuous vehicle telemetry. Its combination of cellular connectivity, onboard GNSS, local logging, and OBD II data capture makes it suitable for organizations that need timely location data and richer vehicle context in Plaspy.

- Plug and play OBD II form factor for quick installation and immediate reporting to Plaspy.
- Multi generation cellular connectivity for reliable real time tracking and wider coverage.
- Built in GNSS and GSM antennas with internal backup battery to support continued reporting during power loss.
- 6 axis accelerometer for detection of harsh acceleration, braking, cornering, impact and flip events.
- OBD II data reading including odometer and fuel related values when exposed by the vehicle.
- Large local log capacity to preserve position history during connectivity interruptions and support later upload.

## Core Features of CAREU - Ugo

- OBD II plug and use installation for fast deployment without hard wiring.
- 4G LTE connectivity with automatic fallback to 3G and 2G and support for standard SIM or integrated eSIM.
- Built in GNSS and GSM antennas for unobstructed positioning and cellular reporting.
- Internal backup battery to report power loss events and enable limited tracking while external power is absent.
- 6 axis accelerometer to record driving events such as harsh acceleration, braking, cornering and impacts.
- Onboard OBD II data capture including vehicle odometer and other vehicle provided parameters.
- Large onboard logging capacity for thousands of position records to bridge temporary connectivity gaps.
- Remote configuration and firmware over the air updates to streamline fleet maintenance and policy alignment.

## How These Features Work with Plaspy

Plaspy ingests the Ugo device telemetry to provide mapping, event visibility, and historical reporting. When a Ugo tracker is connected, Plaspy displays position updates, OBD II telemetry, and accelerometer driven events to support monitoring and operational workflows.

- Live GNSS positions and OBD II telemetry appear in Plaspy for mapping, trip segmentation, and reporting.
- Accelerometer events and harsh driving alerts feed driver behavior analytics and event timelines.
- OBD II fields such as odometer and vehicle reported parameters enrich trip data and historical reports when available from the vehicle.
- Large local logs are uploaded to Plaspy after connectivity returns, preserving continuity of records.
- Remote configuration and FOTA support allow fleet managers to align device behavior with Plaspy reporting and alerting without physical recall.

Plaspy automatically detects supported tracker protocols and integrates device data into the platform for immediate visibility and historical analysis.

## Typical Use Cases

- Delivery and courier fleets that need real time location, route visibility, and driving behavior analytics.
- Light commercial and utility vehicles requiring OBD II telemetry and odometer reporting for operational oversight.
- Security and patrol fleets where quick installation, anti theft awareness, and rapid redeployment are priorities.
- End user vehicles that benefit from plug in anti theft monitoring, ignition state reporting, and driving style feedback.
- Mixed fleets using Bluetooth enabled accessories to extend telemetry and asset context on supported variants.
- Large rollouts where eSIM options and remote firmware management reduce logistics and maintenance overhead.

## Feature Availability Notes

- Firmware version, regional SKU, and hardware revision can change available functions and logging capacity.
- Some OBD II vehicle parameters such as fuel related values are only available when exposed by the vehicle ECU.
- Bluetooth and certain accessory options are available on specific variants and may not be present on all SKUs.
- Local log size and cellular generation support differ between 4G variants and 3G 2G variants.
- Remote management features such as FOTA and configuration rely on compatible firmware and carrier connectivity.

## Why Use Plaspy with These Features

Using CAREU Ugo with Plaspy provides a practical path to turn plug and play OBD II telemetry into operational insights. The device delivers position, driving events, and vehicle reported data into Plaspy so teams can monitor fleets, create alerts, and generate historical reports without complex installation work.

If you want to learn more about Plaspy and how it can integrate with CAREU Ugo devices visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance verify details on the official CAREU website https://www.systech-iot.com/ since device features and firmware behavior can change over time.
