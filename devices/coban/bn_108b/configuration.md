---
slug: /coban/bn_108b/configuration
id: bn_108b-configuration
sidebar_label: Configuration
title: Coban - BN-108B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for the Coban BN-108B and how to connect it to Plaspy using shared server settings
keywords:
  - Coban BN-108B configuration
  - Coban BN-108B setup
  - BN-108B Plaspy configuration
  - BN-108B GPS tracker setup
  - Coban tracker server configuration
  - Plaspy tracker integration
  - GPS tracker TCP UDP configuration
  - mobile asset tracking setup
  - fleet tracking BN-108B
  - BN-108B SMS configuration
---

# Coban - BN-108B Configuration

This page provides public configuration context for using the Coban BN-108B with Plaspy. It collects the practical, nonproprietary steps and commands commonly used to point the device at Plaspy servers, validate connectivity, and prepare the tracker for live tracking and event reporting. Use this guide together with the official manufacturer documentation for device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The BN-108B supports SMS and GSM/GPRS reporting methods, so the examples below reflect typical SMS-based configuration commands that are publicly documented for this model.

## Configuration Overview

The goal of configuration is to prepare the BN-108B to communicate reliably with Plaspy so positions, alerts, and telemetry appear in your Plaspy account. Typical configuration sets the APN for GPRS, programs the Plaspy server endpoint and port, chooses transport (UDP or TCP) if required by the tracker, and verifies the device is reporting.

- Set the device APN and mobile credentials so the tracker can connect to the cellular network and GPRS.
- Program the Plaspy server endpoint (domain or IP) and the shared Plaspy port so the device sends telemetry to Plaspy.
- Choose transport (UDP or TCP) on the device if it requires a transport selection for GPRS mode.
- Apply settings, restart the device if needed, and validate that positions and events appear in Plaspy.
- Use SMS-based configuration or manufacturer tools as available to perform these steps.

## Plaspy Server Settings

When configuring the BN-108B for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Plaspy uses the same port for all supported devices and will detect the correct protocol automatically after the device attempts to connect.

## Typical Requirements Before Setup

- A charged BN-108B unit with power supplied and the battery at a reasonable level.
- An active SIM card installed with a data plan and SMS capability for remote configuration.
- Knowledge of the device SMS configuration method (the BN-108B supports SMS commands).
- The device password (default in public commands below is 123456) or the password set for the device.
- Access to the manufacturer's configuration instructions or tools for your firmware version.
- A means to receive or view the device reporting in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The BN-108B sends location and status data to Plaspy using the device's GSM/GPRS data channel or SMS reports. The tracker is configured to report to the shared Plaspy server endpoint and port so Plaspy can ingest and present the data.

- The tracker posts TCP or UDP packets to Plaspy at d.plaspy.com or 54.85.159.138 using port 8888.
- Plaspy automatically detects the tracker protocol and processes incoming telemetry without requiring separate per-device port mappings.
- Alarms and events such as SOS, power disconnect, movement, and low battery are transmitted to Plaspy and shown as alerts.
- Report intervals and power saving modes control how often the device sends updates to Plaspy for real-time or battery-optimized tracking.
- SMS configuration commands can be used to program APN, server settings, and reporting behavior before or during deployment.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the BN-108B (SMS commands or manufacturer software) and confirm the device is responsive.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server setting.
3. Set the server port to 8888 as the device destination port for Plaspy.
4. Choose UDP or TCP if the device requires a transport selection for GPRS mode.
5. Apply or save the configuration and send the commands to the device (SMS or via the official tool).
6. Restart the device if required by the firmware or after a server change.
7. Validate that the device reports to Plaspy by confirming position updates and events appear in the platform.

## Example Configuration Commands

The BN-108B supports SMS-based configuration commands. The commands below are public and shown here in the order commonly used. The default device password used in these examples is 123456; replace it if your device uses a different password.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC+0
```text
time zone123456 0
```

- Set the mobile operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username and password (replace {{apnu}} and {{apnp}} with operator credentials)
```text
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the public server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set the location update interval (example public format shown)
```text
fix060s060s***n123456
```

- Switch GPRS mode to enable data reporting (two public variants shown)
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Check current device settings
```text
check123456
```

- Enable enhanced digital/fuel sensor status reporting or adjust protocol mode
```text
protocol123456 18
```

Notes on placeholders and commands:
- {{apn}} is a placeholder for your operator APN string. Replace it with the APN provided by the SIM carrier.
- {{apnu}} and {{apnp}} are placeholders for APN username and password when required by the carrier.
- The factory reset command begin123456 is optional and should be used only when needed during initial setup or troubleshooting.
- The exact meaning of some GPRS mode parameters can vary by firmware; consult the manufacturer document for your BN-108B firmware version if behavior differs.

## Configuration Notes

- Manufacturer firmware revisions can change command formats or behavior; verify commands against the BN-108B documentation for your device firmware.
- SMS-based setup is supported and often used for field configuration, but manufacturer tools or PC software may also be available for batch provisioning.
- Selecting UDP versus TCP may affect delivery guarantees and firewall behavior; choose the transport that fits your network and operational needs.
- Plaspy uses the same port for all devices and will automatically detect the tracker protocol when the device connects to d.plaspy.com or 54.85.159.138 on port 8888.
- Preserve the device password security and replace the default password if your deployment requires it.

## Why Use Plaspy with This Configuration

Using the BN-108B with Plaspy gives organizations reliable remote visibility for mobile assets with long battery life and flexible reporting modes. Configuring the tracker to point at Plaspy's shared server settings simplifies integration so you can quickly receive live positions, alerts, and historical tracks in a single platform.

Learn more about Plaspy and how it integrates with devices like the BN-108B at https://www.plaspy.com. For the most current device-specific configuration details, firmware information, and official command references, verify the manufacturer's documentation at https://www.coban.net/ as methods and firmware behavior can change over time.
