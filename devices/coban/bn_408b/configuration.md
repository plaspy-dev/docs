---
slug: /coban/bn_408b/configuration
id: bn_408b-configuration
sidebar_label: Configuration
title: Coban - BN-408B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-408B showing Plaspy server settings and practical SMS setup steps
keywords:
  - Coban BN-408B configuration
  - BN-408B setup
  - Coban tracker Plaspy
  - BN-408B server configuration
  - BN-408B SMS commands
  - GPS tracker configuration Plaspy
  - BN-408B tracking setup
  - vehicle tracking BN-408B
  - asset tracker BN-408B
  - Plaspy tracker configuration
---

# Coban - BN-408B Configuration

This page covers the public configuration context for using the Coban BN-408B tracker with Plaspy. It collects the practical, manufacturer-published SMS commands and the shared server settings you will use to point the tracker to Plaspy for live tracking and alarm reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware revision, hardware variant, installation type, and vendor tools. The BN-408B supports TCP, UDP and SMS reporting, and the example SMS-based commands below reflect common public setup methods for this model.

## Configuration Overview

The goal of this configuration process is to prepare the BN-408B so it reliably reports position and alarm events to the Plaspy platform using the shared server endpoint and port. For BN-408B units the manufacturer provides SMS command-based configuration as a practical on-vehicle method when remote configuration over GPRS is not yet available.

- Configure the device APN and GPRS settings so it can use cellular data to reach Plaspy.
- Point the tracker to the Plaspy server endpoint so position and alarms are sent to the correct receiver.
- Select transport (UDP or TCP) and set the update interval to match your reporting needs.
- Verify the device reports to Plaspy and check alarms such as tamper, low battery, and SOS on the platform.
- Keep a copy of the SMS commands and password used for configuration for troubleshooting and future changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the BN-408B may be configured to use UDP or TCP to send data
- Plaspy automatically detects the tracker protocol so all devices use the same port and the platform identifies incoming protocol behavior

## Typical Requirements Before Setup

- A charged BN-408B device with the manufacturer default password available; default password shown in public commands below is 123456
- An active SIM card with a data plan and the correct operator APN credentials for GPRS access
- Access to the device SMS interface or manufacturer's configuration tool to send configuration commands
- A phone capable of sending SMS to the device number, or a compatible SMS gateway where supported
- The device installed or placed where it can obtain GNSS fixes and cellular signal for validation

## How This Tracker Connects to Plaspy

The BN-408B sends periodic position updates and alarm/status messages to the Plaspy server endpoint and port configured on the device. Plaspy receives those messages over TCP or UDP and converts them into tracking positions, alarms, and platform events that are visible in your Plaspy account.

- The tracker is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Position updates, movement and alarm telemetry are sent over the chosen transport (UDP or TCP).
- Plaspy automatically detects and interprets the device protocol so telemetry is routed and decoded in the platform.
- Alarms such as tamper, low battery, movement, and SOS are translated into platform alerts for monitoring and dispatch workflows.
- After configuration the device should appear in Plaspy and deliver live updates and history for playback and analysis.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor tool documented for the BN-408B.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device server setting.
3. Set the server port to 8888 as Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection and set the device to the chosen mode.
5. Apply or save the configuration and send any required verification commands.
6. Restart or power cycle the device if the tracker requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy by checking device activity and position updates in the Plaspy platform.

## Example Configuration Commands

The BN-408B supports SMS-based configuration. The manufacturer-published public SMS commands and default password are shown below in order. The default device password used in these examples is 123456. If your device password was changed, replace 123456 with the correct password.

- Factory reset (optional initial step)
```text
begin123456
```

- Set the time zone to UTC-0
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your mobile operator APN)
```text
apn123456 [apn]
```

- Set the APN username and password (replace placeholders with your operator credentials)
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```

- Set the position update interval example (sample command from manufacturer)
```text
fix060s060s***n123456
```

- Switch to GPRS mode and select transport
```text
gprs123456,1,1
```
or, if the device accepts the simpler command
```text
gprs123456
```

- Check current settings
```text
check123456
```

- Enable fuel sensor status or improve digital sensor transmission reporting
```text
protocol123456 18
```

Notes on placeholders and commands
- [apn] is the mobile operator APN string required for data connectivity.
- [apnu] and [apnp] are optional APN username and password fields; use them only if your operator requires authentication.
- The adminip command above uses the Plaspy server IP and port shown earlier; you may alternatively use the domain d.plaspy.com with supported manufacturer syntax if the device supports domain names.
- The factory reset command begin123456 is optional and typically used only in initial setup or to restore defaults.

## Configuration Notes

- Manufacturer firmware and command syntax can vary across production runs and firmware versions; always confirm command formats against your device documentation.
- SMS-based setup is shown because it is part of the public BN-408B configuration flow; some deployments may prefer manufacturer software or remote configuration once GPRS is active.
- Choose UDP or TCP based on your operational needs; UDP is commonly used for lower overhead reporting while TCP can provide more reliable delivery in some networks.
- Plaspy uses the same port for all supported devices and automatically detects the incoming tracker protocol, so the port value is uniform across device types.
- Keep a record of the device password and any changes made during setup; incorrect password usage will prevent commands from being accepted.

## Why Use Plaspy with This Configuration

Using the BN-408B with Plaspy gives organizations a straightforward way to collect long-term location, alarm, and status data from mobile assets. The device's support for TCP, UDP and SMS reporting combined with Plaspy's automatic protocol detection simplifies integration and reduces the number of device-specific server endpoints you need to manage.

Learn more about Plaspy and how it supports fleet and asset tracking at https://www.plaspy.com. Manufacturer specifications and setup methods can change over time, so verify the latest device-specific configuration details and firmware behavior on the official Coban website https://www.coban.net/.
