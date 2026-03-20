---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms/features
id: mta_glonass_ver12m_can_fms-features
sidebar_label: Features
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the MTA Glonass ver12M CAN FMS tracker and how it integrates with Plaspy for fleet telemetry
keywords:
  - OKB Tehnoavtomatika MTA Glonass features
  - MTA Glonass ver12M CAN FMS GPS tracker
  - Plaspy compatible tracker
  - vehicle telemetry CAN FMS
  - fuel monitoring GPS tracker
  - GNSS GLONASS GPS receiver
  - heavy truck tracking
  - fleet management telemetry
  - anti theft tracking workflows
  - event storage and reporting
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS) Features

This page covers the public feature context for using the OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN FMS) tracker with Plaspy. It describes practical capabilities, typical uses, and how the device's GNSS position and vehicle telemetry are commonly consumed by Plaspy for real time tracking, alerts, and historical reporting.

Exact feature availability and behavior can vary by firmware version, hardware revision, optional model variants, and the specifics of installation and wiring. For device specific configuration, optional interfaces, and the latest technical details consult the official manufacturer documentation and firmware release notes.

## Feature Overview

The MTA-Glonass (ver.12M-CAN FMS) is a compact vehicle terminal designed for commercial fleets that need reliable GNSS positioning and direct vehicle telemetry ingestion. It blends a 50 channel GNSS receiver with GSM communications and a vehicle focused I O set for fuel monitoring, event storage, and continuous operation in heavy vehicle environments.

- High sensitivity GNSS positioning for accurate location updates in typical fleet environments.
- Native CAN FMS connectivity to capture engine and vehicle bus telemetry where supported.
- Multiple fuel sensing options including dry contact pulse inputs and an analog ADC for tank level monitoring.
- Wide DC power range and an internal backup battery for uninterrupted operation and graceful standby.
- Non volatile event storage allowing thousands of records to be retained for later upload and audit.
- Designed for continuous vehicle operation with optimized power consumption and compact form factor.

## Core Features of OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS)

- 50 channel GNSS receiver supporting GLONASS and GPS for robust satellite positioning.
- GSM communications including GPRS data and SMS for telemetry delivery to cloud platforms.
- Native CAN FMS interface to access engine and vehicle bus parameters on supported trucks.
- Multiple sensor inputs including dry contact pulse input and an analog ADC for fuel and sensor integration.
- Internal rechargeable backup battery to maintain operation during transient power loss.
- Wide input voltage range suitable for heavy vehicle electrical systems.
- Non volatile event memory capable of storing large numbers of records for later transmission.
- Optional interfaces such as 1-Wire sensor input and an open collector output on supported hardware variants.

## How These Features Work with Plaspy

When integrated with Plaspy, the MTA-Glonass sends location and vehicle telemetry to the platform so fleet managers can monitor vehicles in real time, review historical records, and configure alerts based on events reported by the device. Plaspy automatically detects supported tracker protocols and maps incoming telemetry into dashboards and reports.

- Real time vehicle location plotted on Plaspy maps and available in live tracking views.
- CAN FMS telemetry fields ingested into Plaspy where available to show engine hours, speed, and other bus data.
- Fuel sensor inputs converted to level or pulse events for consumption analytics and theft detection workflows.
- Stored events in the device are uploaded to Plaspy and appear in historical logs for compliance and audit.
- Device inputs and optional outputs can be used in Plaspy rule engines to trigger alerts and remote workflows such as anti theft actions.

## Typical Use Cases

- Heavy truck fleet management using CAN FMS telemetry for maintenance planning and operational oversight.
- Fuel monitoring and reconciliation combining analog and pulse inputs to detect anomalies and consumption patterns.
- Anti theft monitoring and remote immobilization workflows coordinated through Plaspy event rules and outputs.
- Remote diagnostics and lifecycle monitoring using engine and vehicle bus parameters where available.
- Temperature aware cargo monitoring when a 1-Wire temperature sensor is installed and telemetry is pushed to Plaspy.
- Historical reporting for compliance, audits, and operational analysis based on retained event records.

## Feature Availability Notes

- Feature availability can depend on firmware version and hardware revision; some inputs or outputs may be optional on certain units.
- CAN FMS parameters available for ingestion depend on the vehicle make, model, and the CAN FMS implementation used by that OEM.
- Optional interfaces such as 1-Wire sensor input and open collector outputs may not be present on every hardware variant.
- Installation and wiring practices affect sensor readings and telemetry quality; professional installation is recommended for bus connections.
- Regional cellular band variants and operator support can influence on network connectivity and message delivery behavior.
- Always consult the manufacturer documentation for definitive specifications and for any changes introduced in firmware updates.

## Why Use Plaspy with These Features

Using the MTA-Glonass (ver.12M-CAN FMS) with Plaspy gives organizations a practical way to combine precise GNSS positioning and vehicle level telemetry into a single monitoring and reporting solution. Plaspy ingests location, CAN FMS data, fuel sensor inputs, and stored events so fleet managers can visualize operations, set actionable alerts, and produce historical reports from one platform.

To learn more about Plaspy and how it can integrate with the MTA-Glonass, visit https://www.plaspy.com. For the most current device specific feature details, firmware notes, and official technical documentation, verify information with the manufacturer at http://www.okb-ta.ru/.
