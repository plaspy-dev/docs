---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms
id: mta_glonass_ver12m_can_fms
sidebar_label: MTA-Glonass (ver.12M-CAN FMS)
sidebar_class_name: menu_item_tracker
---
# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS)

![MTA-Glonass (ver.12M-CAN FMS)](./tracker.jpg)

The MTA-Glonass \(ver.12M-CAN FMS\) is a compact vehicle monitoring terminal built for satellite-based fleet tracking and telematics. Designed for commercial vehicles, this Plaspy compatible GPS tracker leverages a 50‑channel GNSS receiver \(GLONASS/GPS\) and GSM communications to deliver reliable real-time tracking and fleet management telemetry to Plaspy dashboards and alerting systems.

With native CAN FMS connectivity for heavy trucks, multiple fuel inputs, non-volatile event storage and a wide DC power range, the MTA-Glonass \(ver.12M-CAN FMS\) is optimized for continuous vehicle operation. Its low power draw, internal backup battery and robust interface set make it a practical choice for integration with Plaspy for anti-theft workflows, fuel monitoring and remote diagnostics.

## Key Highlights

- Plaspy compatible GPS tracker: integrates GNSS position and vehicle telemetry for real-time tracking and reporting.
- CAN FMS connection: native support for heavy truck CAN FMS \(DAF, Scania, MAN, etc.\) enables engine and vehicle telemetry ingestion.
- Comprehensive fuel sensing: dry-contact and analog ADC inputs for frequency/pulse sensors and direct tank level measurement.
- Reliable GNSS performance: 50‑channel high-sensitivity receiver with fast time-to-ready \(≤ 1 minute\) for quick lock on start.
- Wide vehicle power support and backup battery: 9–68 V DC operation with an internal rechargeable battery \(~600 mAh\) for ≥6 hours standby.
- Event-rich memory and low power consumption: stores thousands of non-volatile event records and operates efficiently in active/standby/sleep modes.
- Compact, vehicle-focused design: small footprint and light mass for discreet installation in commercial fleets.

## How It Works with Plaspy

When paired with Plaspy, the MTA-Glonass \(ver.12M-CAN FMS\) sends GNSS coordinates and vehicle telemetry over GSM \(GPRS, DATA channel, SMS\) to the Plaspy platform. Plaspy consumes these streams to provide real-time tracking, customizable alerts and historical reporting for fleet managers. Integration focuses on mapping CAN FMS parameters to Plaspy telemetry fields, translating fuel sensor inputs into consumption events, and delivering event records for compliance and audit.

- Real-time location and telemetry updates via GPRS/DATA channel and SMS fallback.
- CAN FMS telemetry ingestion: engine hours, RPM, speed, fuel consumption and other bus data where available.
- Fuel monitoring: pulse/dry-contact and analog ADC inputs feed fuel level and consumption analytics in Plaspy.
- Temperature monitoring via optional 1-Wire sensor input \(integrated into Plaspy reports when used\).
- Remote control and anti-theft workflows: optional open-collector output can be used to control external actuators \(for example, immobilizer relays\) when coordinated through Plaspy command tools.

## Technical Overview

| Connectivity | GSM \(GPRS, dedicated DATA channel, SMS\); GNSS \(GLONASS/GPS\) |
| --- | --- |
| Bands | GSM 900 / 1800 |
| Power & Battery | DC 9–68 V input; internal rechargeable battery ≈ 600 mAh providing ≥ 6 hours standby |
| Interfaces | CAN bus \(CAN FMS\), 1 dry-contact input \(ground-triggered\), 1 analog ADC input \(up to 12 V\), optional 1-Wire input, optional open-collector output \(≤50 V, ≤1.5 A\) |
| GNSS | 50-channel high-sensitivity GPS/GLONASS receiver; time to ready ≤ 1 minute |
| Bluetooth | Not included / Not specified |
| Power Consumption | Active ≤ 110 mA @ 12 V; Standby ≤ 35 mA @ 12 V; Sleep ≤ 20 mA @ 12 V |
| Events & Memory | Up to 64 configurable events; non-volatile storage \(typical capacity ~16,000 to 125,000 records depending on configuration\) |
| Protection & Form Factor | IP30 enclosure; dimensions ≤ 90 × 65 × 30 mm; mass ≤ 200 g |
| Remote Management | Not specified |

## Use Cases

- Fleet management for heavy trucks: ingest CAN FMS telemetry into Plaspy for route optimization, driver scoring and maintenance planning.
- Fuel level monitoring and control: combine analog and pulse inputs to detect fuel theft, measure consumption and reconcile fueling events.
- Anti-theft and remote immobilization workflows: use event triggers and the optional open-collector output via Plaspy to disable or alert on unauthorized movement.
- Cold chain or temperature-aware loads: attach a 1-Wire temperature sensor and feed environmental data into Plaspy for compliance and alerts.
- Remote diagnostics and telemetry: capture engine and vehicle bus data to support preventive maintenance and reduce downtime.

## Why Choose This Tracker with Plaspy

The MTA-Glonass \(ver.12M-CAN FMS\) brings a focused feature set for fleets that need reliable GLONASS/GPS positioning, deep vehicle telemetry via CAN FMS and robust fuel-sensing options. Its wide input voltage range and internal backup battery make it suitable for heavy commercial vehicles, while optimized power consumption reduces impact on vehicle electrical systems. When used with Plaspy, this GPS tracker enables real-time tracking, advanced telemetry dashboards, fuel monitoring analytics and anti-theft workflows — all delivered through standard GPRS/DATA and SMS channels for dependable communications in the field.

Choose the MTA-Glonass \(ver.12M-CAN FMS\) for a Plaspy compatible solution that focuses on operational reliability, vehicle-centric telemetry and practical I/O for fuel and sensor integration. For fleets that require accurate positioning, CAN FMS integration and event-rich data collection for analytics and compliance, this terminal offers a compact, industry-oriented platform for smart fleet management.

