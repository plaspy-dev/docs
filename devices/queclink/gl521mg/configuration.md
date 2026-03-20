---
slug: /queclink/gl521mg/configuration
id: gl521mg-configuration
sidebar_label: Configuration
title: QuecLink - GL521MG Configuration
sidebar_class_name: menu_item_tracker
description: Configure QuecLink GL521MG for use with Plaspy including server settings SMS commands and setup guidance
keywords:
  - QuecLink GL521MG configuration
  - QuecLink GL521MG setup
  - GL521MG Plaspy setup
  - QuecLink tracker configuration
  - GL521MG server configuration
  - QuecLink GPS platform setup
  - QuecLink @Track protocol
  - asset tracker configuration
  - GPS tracker setup guide
  - vehicle tracking configuration
---

# QuecLink - GL521MG Configuration

This page documents the public configuration context for using the QuecLink GL521MG with Plaspy. It explains the shared Plaspy server settings you will use, the common setup workflow, and example SMS commands published for this model. Use this guide to prepare the GL521MG for reporting to Plaspy and to understand what to check before final deployment.

Plaspy uses a unified server endpoint and port across supported devices and it automatically detects the tracker protocol. Manufacturer configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands here as published public examples and confirm details against manufacturer documentation and the device firmware you have installed.

## Configuration Overview

The goal of configuration is to prepare the GL521MG to communicate reliably with the Plaspy platform so location, sensor, and alarm events appear in your Plaspy account. For the GL521MG this commonly means applying network settings, pointing the device at the Plaspy server endpoint, and enabling the desired reporting and alarm inputs.

- Apply GPRS or network APN settings so the device can establish mobile data connectivity.
- Configure the device to report to the Plaspy server endpoint so telemetry is routed to your platform.
- Set reporting intervals and alarm inputs to match the monitoring needs for your deployment.
- Validate connectivity and confirm that the device appears in Plaspy after configuration.
- Optionally use SMS-based commands for field provisioning when a configuration tool is not available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and powered GL521MG device with an active SIM card installed and mobile data enabled.
- The correct APN, APN username, and APN password for the SIM operator.
- Access to the QuecLink SMS command flow or the official QuecLink configuration tool for your firmware version.
- Knowledge of the device password if configuration commands require authentication (the example commands below use the public default password queclink).
- A test plan to validate that the device reports into Plaspy after configuration.

## How This Tracker Connects to Plaspy

The GL521MG reports position and event data to Plaspy by being configured to send its telemetry to the shared Plaspy server endpoint on the standard Plaspy port. Plaspy ingests position updates, sensor readings, and alarm events and maps them to device records in the platform.

- The device is configured to point at d.plaspy.com and/or 54.85.159.138 on port 8888.
- Telemetry can be sent over UDP or TCP depending on your transport choice; Plaspy will detect the tracker protocol automatically.
- Regular position reports and scheduled telemetry updates become visible as device activity in Plaspy.
- Alarm and SOS inputs configured on the device will be sent to Plaspy and can trigger alerts and notifications.
- After configuration, validate device visibility and event reporting in Plaspy to confirm successful integration.

## Common Configuration Workflow

1. Access the official QuecLink configuration method for the GL521MG such as SMS commands, web or desktop configuration tools, or the vendor provisioning workflow appropriate to your firmware.
2. Enter d.plaspy.com as the GPRS server domain or use the Plaspy server IP 54.85.159.138 where required by the device UI.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires a transport selection and save the transport choice.
5. Apply or save the configuration on the device and, if using SMS commands, ensure commands confirm successful acceptance.
6. Restart the device if required by the firmware or configuration method to apply network and server settings.
7. Validate that the device reports to Plaspy by checking device activity and incoming telemetry in the Plaspy platform.

## Example Configuration Commands

The GL521MG can be configured by SMS using QuecLink AT style commands. The following published example commands are shown in the original public configuration content. The device password used in these commands is queclink which is the default in the sample commands. Replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}} with the values provided by your SIM operator.

- Optional initial step to restore factory settings (use only if you intend to reset the device):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN (replace placeholders with your operator details):
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Explanation: {{apn}} is the operator APN string, {{apnu}} is the APN username, and {{apnp}} is the APN password. Leave username and password blank if your operator does not require them.

- Set the GPRS server to Plaspy by domain and IP and specify port 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Explanation: This example includes both the domain d.plaspy.com and the Plaspy server IP 54.85.159.138 and sets the port to 8888. Transport selection may be inferred by the device; Plaspy supports UDP or TCP and will detect the protocol automatically.

- Set the location update interval to 60 seconds:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification (example enables input 2):
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Use the SMS response messages from the device to confirm each command was accepted. If your installation uses a configuration tool instead of SMS, apply the equivalent settings there: set APN, set server/domain to d.plaspy.com or 54.85.159.138, set port 8888, pick UDP or TCP if required, and enable reporting intervals and alarm inputs as needed.

## Configuration Notes

- Firmware and provisioning tools differ by QuecLink firmware version and regional product variants; confirm command syntax for your firmware before mass provisioning.
- SMS provisioning is useful for field configuration, while desktop or enterprise provisioning tools may be faster for bulk deployments.
- Choose UDP or TCP according to your transport requirements; Plaspy accepts both and performs automatic protocol detection.
- Keep track of APN credentials and replace placeholders in commands with operator values before sending.
- The example commands use the sample device password queclink; change device passwords in production to maintain security.

## Why Use Plaspy with This Configuration

Using Plaspy with the QuecLink GL521MG provides a straightforward path to ingesting location, sensor, and alarm data into a single platform for dashboards, history, and alerts. The GL521MG's long standby design and sensor suite make it well suited to asset, cold chain, and static deployments where scheduled reporting and event alarms are important.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For device specific details, firmware updates, and the most current command set verify information on the manufacturer site https://www.queclink.com/ as device firmware and setup methods can change over time.
