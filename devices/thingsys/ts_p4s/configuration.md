---
slug: /thingsys/ts_p4s/configuration
id: ts_p4s-configuration
sidebar_label: Configuration
title: ThingSys - TS-P4s Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for ThingSys TS-P4s GPS tracker with Plaspy server settings and example SMS commands for configuration
keywords:
  - ThingSys TS-P4s configuration
  - TS-P4s setup
  - ThingSys GPS tracker configuration
  - TS-P4s Plaspy setup
  - Plaspy device configuration
  - GPS tracker server configuration
  - vehicle tracking TS-P4s
  - asset tracking TS-P4s
  - Plaspy compatibility TS-P4s
  - TS-P4s SMS commands
---

# ThingSys - TS-P4s Configuration

This page describes the public configuration context for using the ThingSys TS-P4s tracker with Plaspy. It gathers the Plaspy server settings you will need and explains the practical steps and example SMS commands published for the TS-P4s so you can configure the device to report to Plaspy for fleet or asset tracking.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor configuration tools. The TS-P4s supports SMS-based configuration as published by ThingSys, including example SMS commands and a default device password in the public configuration material.

## Configuration Overview

The goal of configuration is to prepare the TS-P4s so it can securely and reliably send location and telemetry to the Plaspy platform. For the TS-P4s this commonly means configuring the cellular APN, setting the GPRS server and port, and validating that the device is reporting data to Plaspy.

- Configure the device APN settings so the tracker has mobile data connectivity for GPRS reporting.
- Set the server endpoint so reports go to Plaspy at the shared server and port.
- Choose transport (UDP or TCP) if the tracker requires a transport selection for reporting.
- Apply and save the configuration, then verify the device registers and reports to Plaspy.
- Use manufacturer published SMS commands for devices that accept over the air setup and keep placeholders such as {{apn}} as needed.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device requirement
- Plaspy automatically detects the tracker protocol when a device connects

All devices in Plaspy use the same port and Plaspy will parse supported telematics protocols automatically when the tracker connects to the platform.

## Typical Requirements Before Setup

- A charged and powered TS-P4s with an active cellular SIM inserted and SMS enabled as required by SMS configuration methods.
- APN, APN username, and APN password for the mobile operator covering the device location.
- Knowledge of the device default password if needed for SMS configuration (public material shows a default password of 123456).
- Access to ThingSys configuration method such as SMS commands or manufacturer tools as provided in the official documentation.
- A Plaspy account or access credentials so you can verify device visibility in the platform after configuration.

## How This Tracker Connects to Plaspy

When the TS-P4s is configured to point at the Plaspy endpoint, it sends periodic location and telemetry data to the shared Plaspy server and port. Plaspy receives the inbound connection on the configured transport and automatically detects the protocol for parsing and platform ingestion.

- The tracker reports GNSS positions and timestamps to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry events such as movement alarms, tamper alerts, and battery level are forwarded to Plaspy for alerts and monitoring.
- Transport may be UDP or TCP depending on device firmware and configuration; choose the transport required by the TS-P4s and Plaspy will handle protocol detection.
- Plaspy displays live location, history, and alert events once the device is successfully reporting to the shared server and port.

## Common Configuration Workflow

1. Identify and access the ThingSys configuration method recommended for your TS-P4s variant (SMS commands or vendor tool).
2. Ensure the device has an active SIM and that APN credentials are available.
3. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device settings.
4. Set the port to 8888 exactly as required by Plaspy.
5. If the device requires a transport selection, choose UDP or TCP per the device prompts.
6. Apply or save the configuration and restart the TS-P4s if the device requires a reboot for settings to take effect.
7. Validate that the device reports to Plaspy and is visible in the platform; Plaspy automatically detects the tracker protocol and will parse incoming messages.

## Example Configuration Commands

The following SMS commands are published in the ThingSys public configuration material for the TS-P4s. Commands show the device default password 123456 where required and include APN placeholders that you should replace with your operator values.

- Optional initial factory reset (use only when needed for initial provisioning)
```text
FORMAT
```

- Set the operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username (replace {{apnu}} with your APN username if required)
```text
apnuser123456 {{apnu}}
```

- Set the APN password (replace {{apnp}} with your APN password if required)
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server using the published IP and port for Plaspy (this command uses the IP form shown in public material)
```text
ip54.85.159.138 8888
```

- Verify or check current device settings
```text
CXZT
```

Notes on the commands above:
- The default device password shown in public materials is 123456; include it where the device requires authentication in SMS format.
- The placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with your mobile operator values.
- The public example uses the server IP 54.85.159.138 and port 8888. If your device supports domain names and the manufacturer documents that option, you can use d.plaspy.com with the same port; otherwise use the IP form provided by ThingSys.

## Configuration Notes

- Firmware and region variants can change available SMS commands and exact command syntax. Confirm commands against the current ThingSys documentation for your device firmware.
- SMS based configuration is available in the published material for the TS-P4s; ensure the SIM supports SMS in your region.
- Choose UDP or TCP according to the device firmware prompts. Plaspy supports either transport and performs automatic protocol detection on incoming connections.
- Keep APN credentials correct and test GPRS connectivity before relying on device reporting to Plaspy.
- If you perform a factory reset, treat that step as optional and only use it during initial provisioning or when troubleshooting.

## Why Use Plaspy with This Configuration

Using the ThingSys TS-P4s with Plaspy provides a practical, low maintenance option for long-term asset and vehicle tracking. The TS-P4s is designed for extended deployments and, when pointed at Plaspy using the shared server and port, delivers location and alarm events into Plaspy dashboards for monitoring, alerting, and historical review. For fleets and operations that require unattended or covert installations, the combination of robust hardware and Plaspy visibility supports operational awareness and timely responses.

To learn more about Plaspy and how it handles device connections and fleet management workflows, visit https://www.plaspy.com. For the latest device specific configuration commands, firmware differences, and technical details for the TS-P4s, confirm current information on the manufacturer website https://www.thingsys.com/ since setup methods and firmware behavior can change over time.
