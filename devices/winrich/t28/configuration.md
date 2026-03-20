---
slug: /winrich/t28/configuration
id: t28-configuration
sidebar_label: Configuration
title: Winrich - T28 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Winrich T28 to report to Plaspy using SMS and GPRS settings with example commands
keywords:
  - Winrich T28
  - T28 configuration
  - Winrich T28 setup
  - Winrich T28 Plaspy
  - T28 server configuration
  - Winrich GPS tracker configuration
  - T28 SMS configuration
  - Winrich T28 APN setup
  - T28 GPRS server
  - vehicle GPS tracker configuration
---

# Winrich - T28 Configuration

This page covers the public configuration context for using the Winrich T28 tracker with Plaspy. It explains the practical setup information that is publicly available, including SMS based configuration commands and the shared Plaspy server details required to send the T28 telemetry into the Plaspy platform. Use this guide to understand what to set on the device so the T28 can report location and status to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps for the T28 can vary depending on firmware, hardware revision, installation type, and vendor tools, so treat the commands and steps here as public examples that should be verified against the device manual and the vendor documentation.

## Configuration Overview

This configuration prepares the T28 to communicate with Plaspy by setting the device APN, GPRS server endpoint, reporting interval, and timezone using the manufacturer supported SMS commands. The result is a tracker that reports periodic position and health data to Plaspy for visibility and event processing.

- Configure the operator APN so the tracker can use cellular data to reach the Plaspy server.
- Point the tracker to the Plaspy server endpoint so reports are delivered to the platform.
- Choose transport and set the shared Plaspy port so the device can open a session for reporting.
- Set a reporting interval that balances battery life and update frequency for your deployment.
- Validate configuration and device status with the tracker verification commands so Plaspy can show the device online.

## Plaspy Server Settings

- Server domain d.plaspy.com as the public server endpoint for tracker reporting
- Server IP 54.85.159.138 as the numeric Plaspy endpoint commonly used in device settings
- Port 8888 which is the shared port Plaspy uses for all supported devices
- Transport support for UDP or TCP depending on device capability and installer preference
- Plaspy automatically detects the tracker protocol so the platform recognizes incoming reports without a device specific protocol selection on the platform side

## Typical Requirements Before Setup

- A charged T28 device with a functioning SIM card that has data and SMS enabled
- Access to the device SMS interface or the official Winrich configuration tool to send commands
- Correct APN details from the SIM operator to configure GPRS connectivity
- Coverage in the deployment area for cellular data transmission
- The T28 firmware or hardware revision checked with the vendor documentation for command compatibility
- The Plaspy server values d.plaspy.com or 54.85.159.138 and port 8888 available in your configuration plan

## How This Tracker Connects to Plaspy

The T28 is configured to report periodic position updates and status messages to the shared Plaspy server endpoint and port. Once the device has a working APN and reports to the configured server, Plaspy ingests the messages and presents them as location updates, alerts, and historical data in the platform.

- The T28 sends GPRS or TCP/UDP packets to the Plaspy server endpoint and port 8888
- Plaspy receives those reports and maps them to the tracker record in the platform
- Periodic reporting intervals let the device conserve battery while still delivering meaningful location updates to Plaspy
- Tamper and low battery notifications configured on the device are forwarded to Plaspy for alerting and monitoring
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required on the platform side

## Common Configuration Workflow

1. Access the official Winrich configuration method for the T28, typically SMS commands as shown in the manufacturer guide or an official tool
2. Enter d.plaspy.com or 54.85.159.138 in the device server settings depending on the device command format
3. Set the port to 8888 which is the shared port used by Plaspy for all devices
4. Choose UDP or TCP for transport if the device requires a transport selection
5. Apply or save the configuration on the device using the manufacturer commands or tool
6. Restart or power cycle the tracker if required by the device firmware to activate new settings
7. Validate that the device reports to Plaspy by checking device status and verifying that reports appear in the Plaspy platform

## Example Configuration Commands

To set the tracker send the following commands by SMS messages in the order shown. These are public commands provided in the manufacturer guidance for the T28. Send each line as an SMS message to the device phone number.

1. Optional initial factory reset when starting a fresh configuration
```
940#
```

2. Set the time zone to UTC 0
```
801#W0#
```

3. Set the operator APN
- Replace the placeholders with your operator values
- {{apn}} is the APN name
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required
- Use the shorter form if username and password are not required
```
802#{{apn}}#
```
or with username and password
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```

4. Set the GPRS server to Plaspy using the numeric IP and shared port
- This points the device to Plaspy so reports are delivered to the platform
```
803#54.85.159.138#8888#
```

5. Set the update interval to 60 seconds
```
730#60#
```

6. Verify current settings
```
886#
```

7. Check device status
```
902#
```

Note about placeholders
- Keep the {{apn}}, {{apnu}}, and {{apnp}} placeholders as shown and substitute real values for your SIM operator. If your operator does not require APN credentials, omit the username and password fields as in the shorter command example.

## Configuration Notes

- SMS based setup is a common method for the T28 and is supported by the public commands shown here; confirm SMS command availability and syntax in the device manual
- Firmware revisions or hardware variants can change command syntax or available options so verify the correct command set for your exact T28 revision
- Choose UDP or TCP based on network reliability and installer preference; both transports are supported for reporting to Plaspy on port 8888
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol on receipt of messages
- Preserve APN placeholders when preparing commands and verify operator credentials before sending configuration SMS messages

## Why Use Plaspy with This Configuration

Using the Winrich T28 with Plaspy is a practical choice for organizations that need long term, low maintenance asset visibility. The T28 is optimized for extended battery life and periodic reporting, and when configured to report to Plaspy it adds predictable location and basic health reporting into fleet dashboards, geofence alerts, and historical reports.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration, firmware notes, and command syntax verify details with the manufacturer at http://www.winrichgroup.com/en/ since vendor documentation and firmware behavior can change over time.
