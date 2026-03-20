---
slug: /concox/pl200/configuration
id: pl200-configuration
sidebar_label: Configuration
title: Concox - PL200 Configuration
sidebar_class_name: menu_item_tracker
description: Instructions to configure Concox PL200 GPS tracker for use with Plaspy including server settings SMS commands and setup checklist
keywords:
  - Concox PL200 configuration
  - Concox PL200 setup
  - PL200 Plaspy configuration
  - PL200 GPS tracker setup
  - Concox tracker SMS commands
  - Plaspy device configuration
  - PL200 APN configuration
  - PL200 server settings
  - PL200 integration Plaspy
  - PL200 tracking platform setup
---

# Concox - PL200 Configuration

This page covers the public configuration context for using the Concox PL200 personal GPS tracker with Plaspy. It explains the shared Plaspy server settings you must apply, the common SMS commands available in public documentation, and the practical steps to prepare the PL200 to report to Plaspy for real-time tracking and alerting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The PL200 supports remote configuration via SMS and GPRS which is reflected in the example commands below; confirm any device-specific behavior with Concox documentation before large deployments.

## Configuration Overview

Preparing the PL200 for Plaspy involves configuring the device so it can establish a GPRS session and report location and event data to Plaspy’s server endpoint. The public commands below show an SMS-based configuration flow commonly used for Concox devices.

- Set the GPRS server to point the device at Plaspy so location and alerts arrive in the platform.
- Configure the device APN and confirm data connectivity so GPRS reporting can start.
- Tune reporting interval and GPRS mode so the device sends updates at the desired cadence.
- Validate configuration using the device verification command and confirm visibility in Plaspy.
- Optionally perform a factory reset first for a clean configuration when required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged PL200 device ready for configuration and with accessible SMS reception.
- An active SIM card provisioned for mobile data and SMS where the PL200 will operate.
- The APN details for the SIM operator ready to enter into the device as [apn] with optional [apnu] and [apnp] when applicable.
- Access to the official Concox configuration method such as SMS commands or vendor software for device management.
- A procedure to verify the device is connecting to Plaspy after configuration, for example checking device status in the Plaspy platform.

## How This Tracker Connects to Plaspy

The PL200 is configured to report GNSS fixes and event alerts over the cellular link to Plaspy’s shared server endpoint and port. Once GPRS is enabled and the server settings are applied, the device sends location and alert data to Plaspy where it is ingested and presented in dashboards and alerting workflows.

- The tracker reports to the Plaspy server endpoint (d.plaspy.com) or the Plaspy server IP (54.85.159.138) on port 8888.
- The device can be set to use UDP or TCP transport depending on the configuration option; Plaspy will detect the protocol automatically.
- Periodic location updates are sent at the configured TIMER interval so the platform receives regular positions.
- Event messages such as SOS or low battery are forwarded to Plaspy for immediate notification and processing.
- After configuration, monitoring in Plaspy confirms the device is visible and reporting.

## Common Configuration Workflow

1. Access the official Concox configuration method for the PL200, typically SMS commands as documented by the manufacturer or vendor tools.
2. Enter the APN values for the SIM operator using the APN command so the device can establish a GPRS session.
3. Enter the Plaspy server as d.plaspy.com or as 54.85.159.138 and set the port to 8888.
4. Choose UDP or TCP transport if the device requires you to specify a transport type.
5. Set the reporting interval (TIMER) and enable GPRS mode (GPRSON) so the device will send updates.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy by checking device status in Plaspy and using the GPRSSET verification command on the device.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages to the device number. Preserve order where noted. Commands use the syntax provided in public Concox documentation.

- Optional initial factory reset (use only when needed to clear prior settings):
```text
FACTORY#
```

- Set the time zone to UTC 0:
```text
GMT,E,0#
```

- Set the operator APN. Replace placeholders with your operator values. If username and password are required include [apnu] and [apnp]:
```text
APN,[apn]#
```
Optional extended form with username and password:
```text
APN,[apn],[apnu],[apnp]#
```
Explanation: [apn] is the APN name provided by your mobile operator. [apnu] and [apnp] are optional APN username and APN password placeholders.

- Set the GPRS server to use the Plaspy domain on port 8888:
```text
SERVER,1,d.plaspy.com,8888,0#
```
Or set the GPRS server using the Plaspy server IP on port 8888:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval every 60 seconds. Two common syntax variants:
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode:
```text
GPRSON,1#
```

- To check current GPRS parameter settings on the device:
```text
GPRSSET#
```

Notes on sending commands: send each SMS to the PL200 device number and wait for the device confirmation SMS (if configured) before proceeding to the next command. Keep the order for server and APN commands to ensure the device can establish connectivity.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options. Confirm command support for your device firmware level before bulk deployment.
- SMS based configuration is commonly used for the PL200 but vendor software or provisioning tools may also be available; choose the method your organization supports.
- When configuring the SERVER command, you can use either the domain d.plaspy.com or the server IP 54.85.159.138. Always use port 8888 because Plaspy uses the same port for all devices.
- Choosing UDP or TCP is a device-level option; Plaspy will automatically detect the protocol so pick the transport that matches your device or network requirements.
- Test each device after configuration to validate GPRS connectivity and confirm the device appears in Plaspy before final deployment.

## Why Use Plaspy with This Configuration

Using the Concox PL200 with Plaspy delivers a compact personal tracking solution that forwards location, SOS, and event telemetry into a single operational platform. This configuration enables organizations to maintain real-time visibility of mobile personnel, receive timely alerts for emergencies, and rely on consistent reporting using the shared Plaspy server settings.

To learn more about Plaspy and how to integrate devices such as the Concox PL200 visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and Concox documentation verify current information at the manufacturer site https://www.iconcox.com/ as methods and firmware behavior can change over time.
