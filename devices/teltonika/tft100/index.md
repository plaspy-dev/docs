---
slug: /teltonika/tft100
id: tft100
sidebar_label: TFT100
sidebar_class_name: menu_item_tracker
---
# Teltonika - TFT100

![TFT100](./tracker.png)

The Teltonika TFT100 is a rugged 2G GPS tracker engineered for e-mobility and high-voltage industrial vehicles — forklifts, telehandlers, loaders and other heavy machinery. Plaspy compatible out of the box, the TFT100 delivers dependable position fixes and rich vehicle telemetry in harsh outdoor environments thanks to its IP67-rated enclosure and a wide 10–97 V power input range. Designed for fleets and assets that operate in demanding conditions, the TFT100 brings the core capabilities fleet managers expect: reliable GPS tracker performance, vehicle-bus integration and extensible sensor support.

When integrated with Plaspy, the TFT100 enables real-time tracking, telemetry visualization and fleet management workflows tailored to e-mobility operations. Its multiple wired interfaces and Bluetooth Low Energy connectivity let you capture CAN bus data, BLE sensor readings and status signals that feed anti-theft alerts, battery management dashboards and operational reports. Note: Teltonika lists the TFT100 as End of Life; confirm availability and replacement options with Teltonika support or sales before deployment.

## Key Highlights

- Rugged IP67 enclosure built for outdoor, high-voltage industrial vehicles and heavy machinery.
- Wide vehicle power compatibility \(10–97 V\) removes the need for external converters across e-mobility platforms.
- 2G cellular modem for broad connectivity in supported regions — suitable for location tracking and telemetry uplinks.
- Direct vehicle integration via CAN, RS232, RS485 and UART interfaces to access BMS and on-board telemetry.
- Bluetooth Low Energy \(BLE\) for pairing external sensors and beacons \(temperature, humidity, magnet/movement, asset ID\).
- Multiple interface variants and order codes for flexible installation and custom packaging options.
- Configured with Teltonika tools \(FOTA WEB, Configurator and product wiki\) to simplify setup and CAN parsing for Plaspy ingestion.

## How It Works with Plaspy

Connecting the TFT100 to Plaspy gives you real-time tracking and telemetry for e-mobility and industrial fleets. Configure the device with Teltonika’s Configurator and FOTA WEB to define cellular communication parameters and CAN parsing rules, then direct the tracker’s telemetry stream to your Plaspy instance. Plaspy receives location and sensor data and converts it into live maps, alerts, historical routes and telemetry dashboards suitable for fleet management and maintenance scheduling.

- Real-time location and telemetry updates appear in Plaspy for live monitoring and historical playback.
- Vehicle-bus data \(CAN/RS232/RS485/UART\) can provide BMS metrics, state-of-charge indicators and other telemetry to Plaspy.
- Bluetooth sensors allow Plaspy to ingest temperature, humidity, movement/magnet events and asset-identification beacons.
- Use CAN-derived events \(for example, charge state or door/alert signals\) to trigger Plaspy alerts and anti-theft workflows.
- Contact Teltonika for specifics on configuring contactless CAN adapters and routing parsed fields into Plaspy reports.

## Technical Overview

| Model | TFT100 \(Teltonika\) |
| --- | --- |
| Connectivity | 2G cellular modem |
| Bands / Frequency | 2G \(frequency details vary by regional variant — consult product documentation\) |
| Power & Battery | Wide input 10–97 V \(suitable for e-mobility high-voltage systems\). No internal backup battery specified in standard documentation. |
| Interfaces | Variants with CAN, RS485, RS232 or UART. Contactless CAN data acquisition supported via compatible adapters. Standard packages include power supply cable; some custom packages include a micro USB cable. |
| GNSS | GPS position tracking for real-time location reporting \(accuracy per GNSS conditions; consult manufacturer specs\). |
| Bluetooth | BLE \(Bluetooth Low Energy\) for external sensors and beacons \(temperature, humidity, magnet/movement, asset identification\). |
| Remote Management | Supported via Teltonika tools: FOTA WEB, Teltonika Configurator and product wiki for firmware updates and configuration. |
| Form Factor | Rugged IP67-rated unit intended for vehicle and heavy-equipment installations; multiple package and ordering codes available. |
| Ordering / EOL | Typical product codes: TFT100TSTAA0 \(CAN\), TFT100TSRAB0 \(RS485\), TFT100TRSAC0 \(RS232\), TFT100TURAD0 \(UART\). Custom codes available; listed as End of Life by manufacturer — verify availability. |

## Use Cases

- BMS monitoring for e-forklifts and electric industrial vehicles — capture battery metrics and state-of-charge telemetry via CAN for predictive maintenance.
- E-mobility fleet management — real-time tracking and utilization analytics to optimize routing, charging and uptime across shared vehicle services.
- Heavy machinery deployment — position tracking and operation telemetry for telehandlers, loaders and outdoor equipment in harsh conditions.
- Environmental and asset sensing — BLE-connected temperature/humidity sensors and magnet/movement beacons for cold-chain or anti-tamper monitoring.
- Anti-theft and security workflows — feed vehicle-bus events and BLE beacon alerts into Plaspy to trigger immobilization or alarm routines when combined with appropriate vehicle controls.

## Why Choose This Tracker with Plaspy

Pairing the Teltonika TFT100 with Plaspy gives fleet and operations teams a focused solution for e-mobility and industrial vehicle management. The tracker’s wide power input and IP67 construction make it reliable for rugged installations, while direct CAN and serial interfaces provide rich telemetry for BMS, battery safety and operational analytics. Bluetooth sensors extend visibility for environmental monitoring and asset identification. Using Plaspy as your platform, you gain real-time tracking, telemetry-driven alerts and fleet management features without rebuilding integrations — Plaspy consumes the tracker’s telemetry and converts it into actionable dashboards and reports.

Before purchase, confirm current availability and EOL implications with Teltonika sales. For deployment, use Teltonika Configurator and FOTA WEB to prepare the TFT100, define CAN parsing rules and pair BLE sensors so that Plaspy can immediately display location, telemetry and alerts for efficient fleet management and anti-theft operations.

