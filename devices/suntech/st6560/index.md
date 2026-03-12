---
slug: /suntech/st6560
id: st6560
sidebar_label: ST6560
sidebar_class_name: menu_item_tracker
---
# Suntech - ST6560

![ST6560](./tracker.jpg)

The ST6560 is a compact OBD-II GPS tracker engineered for seamless Plaspy integration, delivering vehicle-level diagnostics and dependable location data for modern fleet operations. Plug-and-play installation into the vehicle’s 16‑pin J1962 connector makes the ST6560 an efficient choice for fleet management, anti-theft recovery and telematics projects that require Plaspy compatible hardware and rich engine telemetry.

Built for multi-network resilience and extensive vehicle protocol support, the ST6560 combines LTE Cat.M1, NB‑IoT and 2G fallback with multi-constellation GNSS and Dead Reckoning to ensure continuous, accurate real‑time tracking. With BLE 5.3 for local wireless sensors, J1939 and FMS support for heavy-duty vehicles, and deep OBD-II diagnostic access, the ST6560 provides the telemetry and vehicle signals fleet managers expect from a Plaspy compatible GPS tracker.

## Key Highlights

- Plaspy compatible OBD-II GPS tracker providing plug-in vehicle diagnostics and position reporting for fleet management.
- Multi-network cellular connectivity \(LTE Cat.M1, NB‑IoT + 2G fallback\) for reliable real-time tracking across coverage zones.
- Multi-constellation GNSS \(GPS/GLONASS/Galileo/BeiDou\) with ~±2 m CEP accuracy and Dead Reckoning for tunnels and low-signal areas.
- Reads extensive engine diagnostics, diagnostic trouble codes \(DTC\) and vehicle identification via automatic OBD-II protocol detection.
- Supports J1939 ELD and FMS protocols—designed for heavy-duty vehicles and commercial fleet telemetry.
- Built-in BLE 5.3 for local Bluetooth sensors and accessories, expanding on-board telemetry such as temperature or cargo sensors.
- Compact form factor with backup battery, motion sensor \(3-axis accelerometer + 3-axis gyroscope\), and geofence capabilities \(circular & polygonal\).

## How It Works with Plaspy

The ST6560 communicates vehicle location, diagnostics and telemetry to the Plaspy platform over cellular networks. Once installed in the vehicle’s OBD-II port and activated, the device automatically detects the vehicle’s OBD protocol, begins polling supported PIDs and J1939/FMS messages, and transmits standardized telemetry to Plaspy for real-time tracking, alerts, and reporting. Plaspy teams can use the data for live monitoring, scheduled reports, and automated incident alerts.

- Real-time location and telemetry updates sent to Plaspy for live tracking dashboards and historical playback.
- Engine diagnostics and DTC reporting—Plaspy can surface faults and maintenance triggers from the OBD-II data stream.
- J1939 ELD and FMS support for heavy vehicles, delivering engine hours, fuel-related PIDs and CAN-bus telemetry where available.
- Circular and polygonal geofence events for automated alerts on entry/exit and route compliance.
- Access to ignition-related signals and vehicle status via the standard J1962 interface; fuel monitoring and other telemetry where exposed by the vehicle’s OBD/J1939 data.
- Bluetooth sensors: pair BLE devices to the ST6560 for local data \(e.g., temperature, door sensors\) that syncs into Plaspy.
- Dead Reckoning and high-sensitivity GNSS ensure continuity of position reporting in tunnels or urban canyons for reliable Plaspy visualization.

## Technical Overview

| Connectivity | LTE Cat.M1, NB‑IoT with 2G fallback |
| --- | --- |
| Bands | Cellular bands vary by variant \(Cat.M1, NB‑IoT, 2G fallback\). Refer to ST6560.pdf for regional band details. |
| Power & Battery | Vehicle power DC 8–28 V with main power inversion protection; rechargeable 3.7 V, 90 mAh Li‑ion backup battery |
| Interfaces | 16‑pin J1962 OBD-II connector \(includes J1850, K‑Line, CAN ISO 15765‑4\); supports J1939 ELD and FMS protocols |
| GNSS | GPS/GLONASS/Galileo/BeiDou multi-constellation; effective accuracy ~±2 m CEP; TTFF: cold &lt;30s, warm &lt;25s, hot &lt;1s; tracking sensitivity -167 dBm; Dead Reckoning supported |
| Bluetooth | BLE 5.3 for local sensors and accessory integration |
| Sensors & Indicators | Internal antenna, 2 status LEDs \(Network, GPS\), motion sensor \(3-axis accelerometer + 3-axis gyroscope, ICM‑42670\) |
| Power Consumption | Active: 120–130 mA @12 V; Sleep &lt;5 mA @12 V; Deep sleep &lt;2 mA @12 V |
| Environmental & Form Factor | Dimensions 51 × 59 × 25 mm; weight 72 g; operating temp -30 °C to +80 °C |
| Certifications & Accessories | FCC, IC, PTCRB, CE; accessories include J1939 extension cables and Y‑cables; full datasheet \(ST6560.pdf\) available |

## Use Cases

- Fleet management: centralized Plaspy dashboards for route monitoring, driver behavior and telematics-driven maintenance planning.
- Heavy-duty vehicle compliance: J1939 ELD and FMS data collection for long-haul trucks and specialized equipment.
- Anti-theft and recovery: discreet OBD-II installation with geofencing and real-time alerts to detect unauthorized movement.
- Preventive maintenance: DTC and engine telemetry routed to Plaspy for proactive service notifications and reduced downtime.
- Sensor-augmented asset monitoring: BLE sensors for cargo temperature, door open/close status or local asset telemetry paired to the tracker.

## Why Choose This Tracker with Plaspy

The ST6560 pairs compact OBD-II convenience with advanced telemetry and Plaspy compatibility to deliver a balanced solution for fleets and vehicle owners. Its multi-network design \(LTE Cat.M1/NB‑IoT + 2G\), robust GNSS performance with Dead Reckoning, and deep OBD-II/J1939 protocol support make it ideal for real-time tracking, fuel monitoring and engine diagnostics. BLE 5.3 expands use with Bluetooth sensors, while a small backup battery and low-power modes help preserve critical connectivity. Certified to international standards \(FCC, IC, PTCRB, CE\) and supported by vehicle-specific accessories, the ST6560 offers reliable integration into Plaspy for scalable fleet management, telemetry-driven decision making, and enhanced anti-theft workflows.

