---
slug: /coban/bn_407/configuration
id: bn_407-configuration
sidebar_label: Configuration
title: Coban - BN-407 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Coban BN-407 and Plaspy compatibility with practical SMS commands and server settings
keywords:
  - Coban BN-407 configuration
  - BN-407 setup for Plaspy
  - Coban GPS tracker configuration
  - BN-407 server configuration
  - Plaspy device setup
  - bicycle tracker configuration
  - GPS tracker SMS commands
  - Plaspy server settings
  - BN-407 GPRS setup
  - GNSS tracker integration
---

# Coban - BN-407 Configuration

This page documents the public configuration context for using the Coban BN-407 tracker with Plaspy. It describes the shared server settings Plaspy requires, the typical setup workflow, and the SMS commands published for the BN-407 so you can prepare the device to communicate with Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The BN-407 supports SMS configuration and GPRS reporting, and the examples below use the public SMS commands supplied by the manufacturer with the sample device password 123456.

## Configuration Overview

This configuration process prepares the BN-407 to send location and telemetry to Plaspy using the platform's shared endpoint and port, verifies connectivity, and enables visibility and alerts in Plaspy. The BN-407 can be configured by SMS commands (common for concealed installations) to set APN, server address, update intervals, and transport mode.

- Configure the device APN and credentials so the tracker can reach Plaspy over mobile data.
- Point the tracker to the Plaspy server endpoint and port used for all devices.
- Select UDP or TCP transport if the tracker requires a transport selection.
- Set update intervals and alarm reporting so Plaspy receives regular location and event messages.
- Validate device connectivity and confirm the device is reporting to Plaspy for visibility in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged BN-407 with known factory password (sample public default shown below is 123456).
- An active SIM card with data enabled and correct APN details for the mobile operator.
- Access to the BN-407 manufacturer SMS configuration method or official configuration tool.
- Basic access to the device (able to send SMS commands or connect via the vendor tool) and documentation from the manufacturer.
- A plan for testing connectivity so you can confirm the device reports to Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the BN-407 sends location and event messages over the mobile network to Plaspy's shared server endpoint and port. Plaspy then ingests those messages, maps the device protocol automatically, and presents the device position, history, and alerts in the platform.

- The tracker is configured to report to the Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Transport is set to either UDP or TCP depending on device firmware and installer preference.
- Plaspy automatically detects and interprets the BN-407 protocol so manual protocol selection in Plaspy is not required.
- Events such as movement, geo-fence, low battery, and other alarms are forwarded to Plaspy for alerting and history playback.
- Because Plaspy uses a single port for all supported devices, the BN-407 configuration only needs the common server endpoint and the shared port to be reachable.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (SMS commands or vendor tool) as provided by Coban.
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 depending on device command support.
3. Set the server port to 8888 which is the port Plaspy uses for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure APN and APN credentials for the installed SIM so the BN-407 can use mobile data.
6. Apply or save the configuration and restart the device if required by the tracker firmware.
7. Validate that the device reports to Plaspy by checking the device in your Plaspy account and confirming recent position updates.

## Example Configuration Commands

The BN-407 supports SMS-based configuration. The commands below are taken from the public manufacturer instructions and preserve the sample device password 123456. Replace placeholder values with your operator settings where indicated.

Notes:
- The sample device password in these commands is 123456 (this is the default shown in public documentation). Consider changing the password after initial setup.
- Placeholders are shown as {{apn}}, {{apnu}}, and {{apnp}} and should be replaced with your SIM operator APN, APN username, and APN password respectively.

1. Factory reset (optional initial step)
```text
begin123456
```

2. Set the time zone to UTC 0
```text
time zone123456 0
```

3. Set the operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

4. Set the APN username and password (replace placeholders with your credentials)
```text
up123456 {{apnu}} {{apnp}}
```

5. Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```

6. Set the location update interval (example interval command)
```text
fix060s060s***n123456
```

7. Switch to GPRS mode and transport selection
```text
gprs123456,1,1
```
or (alternate form)
```text
gprs123456
```

8. Check current settings
```text
check123456
```

9. Enable enhanced reporting for fuel or digital sensor status
```text
protocol123456 18
```

## Configuration Notes

- SMS configuration is commonly used for concealed installations like frame embedded trackers; follow manufacturer SMS syntax exactly and test carefully.
- Different BN-407 firmware versions and hardware revisions may accept slightly different command formats; always confirm syntax with the device manual.
- Some firmware may accept a hostname instead of an IP for the server; the public BN-407 command above uses adminip with the Plaspy IP address.
- Choose UDP or TCP based on network conditions and device support. Plaspy accepts either transport on the shared port.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so the main server and port are the critical values to set.

## Why Use Plaspy with This Configuration

Using the Coban BN-407 with Plaspy provides discreet, low power bicycle tracking combined with a single shared server configuration that makes deployment consistent across devices. For shared fleets, rental operators, or personal anti-theft use cases, configuring the BN-407 to report to Plaspy enables live location, event-driven alerts, and historical playback without complex per-device server differences.

To learn more about Plaspy and how it handles device ingestion and tracking, visit https://www.plaspy.com. For the latest BN-407 device specifics, firmware notes, and full manufacturer documentation confirm the current details on the official Coban site at https://www.coban.net/ as manufacturer specifications and setup steps can change over time.
