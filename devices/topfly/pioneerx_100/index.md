---
slug: /topfly/pioneerx_100
id: pioneerx_100
sidebar_label: PioneerX 100
sidebar_class_name: menu_item_tracker
---
# TopFly - PioneerX 100

![PioneerX 100](./tracker.png)

# PioneerX 100

The PioneerX 100 is a compact, hardwired GPS tracker designed for reliable fleet management and asset tracking. Plaspy compatible out of the box, the PioneerX 100 delivers high-sensitivity GNSS positioning, global 4G CAT-1 connectivity with 2G fallback, and configurable I/O for ignition, immobilizer and accessory control — making it a practical choice for real-time tracking, anti-theft workflows and telemetry integration.

Engineered for continuous operation in demanding environments, the PioneerX 100 pairs precise positioning \(GPS + BeiDou + Galileo + QZSS\) with BLE 4.2 support for Bluetooth sensors and a robust backup battery to preserve critical data. When integrated with Plaspy, it provides frequent location updates, event alerts and historical telemetry that fleet operators and service providers rely on for visibility and security.

## Key Highlights

- Plaspy compatible GPS tracker with 4G CAT-1 and 2G fallback for broad cellular coverage and reliable real-time tracking.
- High-performance GNSS \(HD8120\) with multi-constellation reception and autonomous position accuracy under 1.5 m CEP.
- Real-time updates as often as every 3 seconds and offline caching of up to 49,000 location points for continuous data collection in remote areas.
- Multiple digital and analog I/Os for ignition detection, relay control, buzzer and SOS integration — suitable for immobilizer and anti-theft applications.
- BLE 4.2 support to pair with TOPFLYtech Bluetooth sensors \(temperature, humidity, door sensors\) for cold-chain monitoring and condition-based alerts.
- Built-in 200 mAh Li-Polymer backup battery to preserve critical messages and state during power loss.
- FOTA support, Type-C configuration port and LED indicators for network and GNSS status — simplifying remote management and installation.
- Rugged operating range \(-30°C to +80°C\) and an optional IP67 waterproof casing for exposed or outdoor installations.

## How It Works with Plaspy

The PioneerX 100 integrates with Plaspy using standard transport protocols and secure telemetry channels so you can receive live location, events and sensor data in your Plaspy dashboards and reports. Configure the device over USB Type-C or remotely via FOTA, then point its reporting to your Plaspy server using TCP, UDP, MQTT or SMS. Plaspy ingests the device’s messages to enable live map tracking, alerts and historical playback.

- Real-time location and telemetry updates \(configurable, down to 3-second intervals\) delivered to Plaspy.
- Ignition status, door/SOS triggers and alarm events reported through digital I/O for anti-theft and immobilizer workflows.
- Fuel monitoring and other analog telemetry can be integrated via the device’s analog inputs or paired Bluetooth sensors for condition-based reporting.
- Remote immobilizer and relay control supported via digital outputs for secure vehicle stoppage from Plaspy.
- BLE sensors \(temperature, humidity, door contacts, wireless relays\) are supported for cold-chain monitoring and environmental alerts within Plaspy.
- Cached positions \(up to 49,000 points\) are transmitted to Plaspy automatically when cellular connectivity is restored to preserve historical trails from offline periods.

## Technical Overview

| Connectivity | 4G CAT-1 \(LTE FDD/TDD\) with 2G GSM fallback |
| --- | --- |
| Bands | Global LTE FDD/TDD band support as listed by the manufacturer; GSM fallback for legacy coverage |
| Power & Battery | Operating voltage 5V–32V DC; backup Li-Polymer battery 200 mAh to preserve messages/state on power loss |
| Interfaces | Multiple digital and analog I/Os, ignition input, relay control, buzzer, SOS button support \(suitable for immobilizer and anti-theft\) |
| GNSS | HD8120 receiver: GPS + BeiDou + Galileo + QZSS; 24 tracking / 66 acquisition channels; autonomous accuracy &lt;1.5 m CEP; TTFF cold &lt;20s, warm/hot &lt;2s |
| Bluetooth | BLE 4.2 \(for TOPFLYtech BLE sensors and compatible accessories\) |
| Protocols & Security | TCP / UDP / MQTT / SMS; security options include MD5 and AES-256 encryption |
| Data Handling | Real-time reporting to servers; local cache up to 49,000 location points for offline operation |
| Sensors | Internal 6-axis accelerometer for speed/towing detection, driving behaviour \(harsh acceleration/braking/turns\) and crash capture; network jamming detection |
| Form Factor & Environmental | Dimensions 105.7 × 57.6 × 16.8 mm; weight ~55 g; operating -30°C to +80°C; storage -40°C to +85°C; optional IP67 casing available |
| Management | Type-C configuration port and FOTA \(firmware over-the-air\) updates; LED indicators for GNSS and network status |

## Use Cases

- Fleet management and logistics — real-time tracking, driver behaviour monitoring and telemetry feeds to Plaspy for route optimization and compliance.
- Vehicle anti-theft and immobilization — ignition detection, relay-based immobilizer control and instant alarm notifications for rapid response.
- Cold-chain monitoring — pair BLE temperature and humidity sensors to track perishable cargo and generate Plaspy alerts for out-of-range conditions.
- Remote asset tracking in limited-connectivity areas — on-device caching of up to 49,000 points maintains historical trails until upload is possible.
- OEM/ODM integration — compact, configurable I/Os and wide input voltage range make the unit suitable for custom vehicle and equipment installations.

## Why Choose This Tracker with Plaspy

PioneerX 100 is a practical, Plaspy compatible GPS tracker that balances precision GNSS performance, rugged design and flexible I/O for anti-theft and telemetry use cases. Its frequent reporting intervals, large offline cache and secure transport options \(including MQTT and AES-256\) give fleet operators dependable real-time tracking and reliable historical data for analytics. BLE sensor support and analog inputs enable fuel monitoring and cold-chain telemetry integration, while FOTA and a USB Type-C port simplify deployment and ongoing maintenance. Choose the PioneerX 100 with Plaspy when you need a compact, configurable tracker that supports immobilizer workflows, telemetry-driven alerts and scalable fleet management without compromising reliability.

