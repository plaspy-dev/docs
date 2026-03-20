---
slug: /carscop/cc_338/configuration
id: cc_338-configuration
sidebar_label: Configuration
title: Carscop - CC-338 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Carscop CC-338 showing Plaspy server settings and example SMS commands for setup
keywords:
  - Carscop CC-338 configuration
  - Carscop CC-338 setup
  - CC-338 Plaspy integration
  - Carscop GPS tracker setup
  - vehicle telematics configuration
  - OBD II CANBUS tracker setup
  - car sharing tracker configuration
  - fleet management tracker setup
  - GPS tracker server configuration
  - Plaspy tracker configuration
---

# Carscop - CC-338 Configuration

This page covers the public configuration context for using the Carscop CC-338 with Plaspy. It summarizes the server settings Plaspy requires, describes the typical setup flow, and includes the publicly available SMS configuration commands that are used in the initial device setup. The content here is grounded in the CC-338 description and the publisher-provided SMS commands and defaults.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools. The CC-338 supports SMS-based configuration in its public command set; use these commands or the manufacturer tools as appropriate and verify any device-specific differences with official manufacturer documentation.

## Configuration Overview

The goal of this configuration process is to point the CC-338 at Plaspy, ensure cellular data connectivity is active, and validate that the device reports location and telemetry to the platform. When properly configured the CC-338 will forward vehicle telemetry and event messages to Plaspy for live monitoring and operational workflows.

- Configure APN and credentials for the installed SIM so the device can use mobile data for GPRS or LTE reporting.
- Point the device to the Plaspy server endpoint so telemetry is delivered to the correct platform.
- Enable keepalive or online reporting options so the unit maintains an active connection with Plaspy.
- Verify time zone and device defaults to ensure timestamps and logs align with your operations.
- Confirm the device appears and reports correctly in Plaspy after configuration and reboot if required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These settings are the public Plaspy endpoint values to use when configuring the device or entering the GPRS/TCP server details.

## Typical Requirements Before Setup

- A powered and accessible CC-338 unit with a SIM card installed and an active data plan; SMS capability is useful for SMS-based configuration.
- The device default password (public example) for SMS configuration is 123456; confirm with your vendor if this has been changed.
- Carrier APN, username, and password information required to enable mobile data connectivity for the device.
- Access to the manufacturer's SMS commands or configuration tool and the ability to send SMS messages from an authorized phone number.
- A clear procedure for testing connectivity and verifying the device appears in Plaspy after configuration.

## How This Tracker Connects to Plaspy

When configured, the CC-338 sends location, telemetry, and event data to the shared Plaspy server endpoint and port so fleet managers can view vehicle status and history in the Plaspy platform. Plaspy automatically detects the device protocol and processes messages without requiring a unique port per device.

- The tracker reports GPS positions and onboard telemetry to the Plaspy server endpoint (d.plaspy.com / 54.85.159.138) on port 8888.
- Telemetry and event messages are sent over TCP or UDP depending on the device transport selection and network conditions.
- Keepalive or online reporting commands keep the session active so Plaspy receives timely updates.
- When GSM or GPS is unavailable the unit stores logs and forwards them to Plaspy once connectivity is restored.
- Plaspy parses the incoming messages and makes them available for monitoring, alarms, and remote-control workflows.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or the device SMS interface as documented by Carscop.
2. Configure the device APN and any required APN credentials so cellular data is available.
3. Enter the Plaspy server endpoint by specifying either d.plaspy.com or the server IP 54.85.159.138 according to the device command or configuration tool.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and send keepalive or online commands as needed.
7. Restart the device if required by the manufacturer or after a server change.
8. Validate that the device reports to Plaspy and appears in your Plaspy instance with live telemetry.

If you use SMS-based setup, follow the manufacturer command order and observe any required delays between commands.

## Example Configuration Commands

The CC-338 public configuration example uses SMS commands. The sample commands below use the default device password 123456 as shown in the public model configuration. Preserve the placeholders where noted.

- Optional initial factory reset (use only when needed or during initial provisioning):
```text
RESET*123456
```

- Set the device time zone to UTC+0:
```text
TIMEZONE*123456*+00
```

- Set the operator APN (replace [apn] with your carrier APN):
```text
APN*123456*[apn]
```

- Set the APN username and password if required by your carrier (replace placeholders):
```text
USERNAME*123456*[apnu]*[apnp]
```

- Set the GPRS server to the Plaspy IP and port (this public command uses the Plaspy server IP and port 8888):
```text
IP*123456*54.85.159.138,8888
```

- Keep the tracker online (enable periodic reporting/keepalive):
```text
KEEPONLINE*123456
```

Notes on placeholders:
- [apn] — replace with your mobile operator APN string.
- [apnu] — replace with the APN username if required.
- [apnp] — replace with the APN password if required.

These commands are provided in the public model configuration. Some devices or firmware versions may support equivalent commands using the d.plaspy.com domain or configuration via the manufacturer software; use the method appropriate for your deployment and verify with manufacturer documentation.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or supported features; always verify commands against the device serial number and current manufacturer documentation.
- The CC-338 public example uses SMS commands for configuration; many integrators prefer the manufacturer configuration tool or an authenticated provisioning method when available.
- Choose UDP or TCP according to your network and the device options; Plaspy accepts both transports on port 8888 and will auto-detect the tracker protocol.
- KEEPONLINE or equivalent keepalive settings help maintain an active connection so Plaspy receives timely updates.
- The default SMS password 123456 is shown in the public example; change factory passwords as recommended by the vendor for production deployments.

## Why Use Plaspy with This Configuration

Using the CC-338 with Plaspy gives fleet operators and car sharing providers an integrated path to live tracking, telemetry, and remote vehicle control. Pointing the device at Plaspy and enabling keepalive reporting provides centralized visibility for location, ignition and door events, sensor alarms, and telemetry that support operational workflows and incident response.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details may change over time; verify the latest setup instructions and command syntax with the official Carscop documentation at http://www.carscop.com/ before deployment.
