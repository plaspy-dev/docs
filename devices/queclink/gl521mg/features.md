---
slug: /queclink/gl521mg/features
id: gl521mg-features
sidebar_label: Features
title: QuecLink - GL521MG Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the QuecLink GL521MG GPS tracker and how it integrates with Plaspy for asset tracking and environmental monitoring
keywords:
  - QuecLink GL521MG features
  - QuecLink GL521MG GPS tracker
  - GL521MG Plaspy compatibility
  - long standby GPS tracker
  - LTE Cat M1 NB2 tracker
  - IP67 asset tracker
  - cold chain tracker
  - BLE accessory tracker
  - Queclink @Track protocol
  - wireless charging GPS tracker
---

# QuecLink - GL521MG Features

This page provides a public feature summary for the QuecLink GL521MG and explains how those capabilities can be used with Plaspy for location, environmental telemetry, and asset monitoring. It covers the device's practical functions, sensors, and integration behavior that are relevant to Plaspy users without exposing private or sensitive configuration details.

Exact feature availability, reporting behavior, and user experience can vary by device firmware version, hardware revision, installation method, regional cellular variants, and manufacturer implementation choices. For device specific technical parameters or the latest firmware notes consult Queclink documentation and release notes from the manufacturer.

## Feature Overview

The GL521MG is a rechargeable, long‑standby asset tracker engineered for low‑maintenance deployments where reliable location and environmental telemetry are required. Its cellular connectivity, internal GNSS, and on‑board sensors make it suitable for static assets, containers, cold‑chain pallets, and pooled equipment that need periodic or event driven reporting.

- Global LTE Cat M1 and NB2 with 2G fallback for wide area coverage and low power telemetry.
- Rechargeable design with Qi wireless charging and internal backup battery support for extended standby.
- Rugged IP67 enclosure and magnetic mounting option for fast installation on vehicles, containers, and static assets.
- Built‑in temperature and light sensors plus a 3‑axis accelerometer for environmental monitoring and tamper/motion detection.
- BLE accessory support to extend telemetry via beacons and compatible sensors.
- Queclink @Track protocol support over TCP, UDP, and SMS to simplify integration with tracking platforms like Plaspy.

## Core Features of QuecLink - GL521MG

- Cellular connectivity: Global LTE Cat M1 and NB2 with EGPRS 2G fallback for broad coverage and low power reporting.
- Rechargeable power: Qi wireless charging plus internal backup battery arrangement to support long standby and field charging workflows.
- Integrated GNSS: On‑board GNSS supporting GPS, GLONASS, Galileo and BeiDou with autonomous accuracy suitable for asset tracking.
- Environmental sensors: Internal temperature sensor and light sensor for environmental state and tamper detection.
- Motion detection: 3‑axis accelerometer for movement and activity reporting.
- BLE support: Bluetooth Low Energy for accessory connectivity and proximity sensing through beacons or compatible peripherals.
- Rugged form factor: IP67 rated enclosure with standard and magnetic housing options to support varied installation styles.
- Protocol support: Queclink @Track protocol over TCP, UDP and SMS for scheduled reports, alarms, geofence events and activation reporting.

## How These Features Work with Plaspy

Plaspy ingests the GL521MG telemetry streams and presents location, sensor, and event data in dashboards, alerts, and historical playback. Plaspy automatically detects the tracker protocol and maps standard telemetry fields into monitoring and reporting views so teams can track assets and respond to events.

- Position and movement reporting from GNSS and the accelerometer appear in Plaspy as live location updates and activity events.
- Temperature and light readings feed environmental alerts and can be included in compliance reports for cold‑chain monitoring.
- Geofence triggers, activation events, and low battery notices are received as alarm events that Plaspy can route to notification and workflow systems.
- BLE accessory data and aggregated sensor readings can be passed into Plaspy to enhance asset context for inventory and condition monitoring.
- Scheduled reporting and configurable power modes allow Plaspy users to balance update frequency and battery life for batch managed fleets.

## Typical Use Cases

- Cold chain logistics monitoring where location and internal temperature readings are required for compliance and alerting.
- Batch asset and pooled container tracking with long standby times and scheduled reporting across multi‑stop routes.
- Warehouse and indoor monitoring using BLE accessories for proximity based inventory checks and static asset visibility.
- High value static asset surveillance with motion and tamper detection for anti‑theft workflows.
- Remote or infrequently accessed equipment monitoring where wireless charging and rugged housing reduce maintenance burden.
- Fleet or site audits that rely on periodic position fixes and sensor snapshots rather than continuous telemetry.

## Feature Availability Notes

- Firmware and software revisions can change report formats, available sensor fields, and alarm behaviors; verify the device firmware level for specific feature sets.
- Hardware variants and regional models may have different cellular band support or housing options; choose the model appropriate for your region and installation.
- Some features such as BLE accessory behavior, temperature sampling rates, and power mode options can be configured on the device and may vary by deployment.
- Installation method and antenna placement affect GNSS and cellular performance; field testing is recommended for critical deployments.
- Confirm details such as backup battery arrangements and wireless charger support with manufacturer documentation for accurate planning.

## Why Use Plaspy with These Features

Using the GL521MG with Plaspy gives organizations a way to centralize location, environmental, and event data for operational oversight. Plaspy can translate periodic GNSS positions, sensor readings, and alarm events from the device into dashboards, alerts, and historical reports that help teams react faster and reduce manual checks.

If you want to learn more about Plaspy and how it can accept telemetry from devices like the QuecLink GL521MG, visit https://www.plaspy.com. For the most current device specific features, firmware behavior, and manufacturer details verify information on the Queclink website https://www.queclink.com/.
