---
slug: /teltonika/fmu126/configuration
id: fmu126-configuration
sidebar_label: Configuration
title: Teltonika - FMU126 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Teltonika FMU126 to report to Plaspy with shared server settings and example commands for public setup
keywords:
  - Teltonika FMU126 configuration
  - FMU126 setup
  - Teltonika FMU126 server configuration
  - FMU126 tracking software configuration
  - Teltonika FMU126 Plaspy setup
  - FMU126 GPS platform setup
  - Plaspy tracker configuration
  - vehicle tracking FMU126
  - FMU126 SMS configuration
  - FMU126 GPRS setup
---

# Teltonika - FMU126 Configuration

This page documents the public configuration context for using the Teltonika FMU126 with Plaspy. It focuses on the server settings and the practical steps you can use to point an FMU126 tracker to Plaspy so the device can report position and diagnostic data to the platform. This guidance uses only public Plaspy endpoints and a documented example command when present.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation method, and the official Teltonika configuration method you use. Where present, this page includes the example command from the FMU126 public configuration content and explains placeholders you must replace.

## Configuration Overview

Configuring the FMU126 for Plaspy prepares the tracker to send its location and events to the Plaspy platform using the shared Plaspy endpoint and port. The process typically sets APN information, the server host or IP, the server port, and the transport type, then validates that the tracker appears in Plaspy.

- Provide the FMU126 with the correct APN and network credentials so it can use mobile data to reach Plaspy.
- Point the device to the Plaspy server hostname or IP and set the shared port used by all Plaspy devices.
- Choose the transport protocol (UDP or TCP) if the device requires an explicit selection.
- Save and apply the configuration and restart the device if required by the firmware.
- Verify the device is visible and reporting in Plaspy and troubleshoot connectivity as needed.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so you can consistently use port 8888 across supported models

## Typical Requirements Before Setup

- A powered and installed FMU126 with access to a mobile network using a valid SIM and data plan.
- Credentials to access the official Teltonika configuration method such as SMS commands or vendor configuration tools.
- Knowledge of the mobile network APN details for the SIM being used.
- A way to send SMS commands or connect the tracker to the manufacturer tool depending on your chosen setup method.
- Access to Plaspy account and fleet records to confirm the device appears after configuration.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the FMU126 will initiate connections and send reporting data to the shared Plaspy endpoint and port. Plaspy’s automatic protocol detection interprets the device protocol and makes the tracker visible in the platform.

- The tracker sends location and event messages to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- You may select UDP or TCP as the transport depending on device options; both are supported by Plaspy on port 8888.
- Plaspy detects the tracker protocol automatically and processes incoming messages for that device.
- After successful configuration the device will appear within Plaspy for tracking, status monitoring, and event reporting.
- Connectivity validation typically includes checking GPRS registration, data session initiation, and message arrival in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software provided by Teltonika (for example using SMS commands or an official configuration tool).
2. Enter the server host as d.plaspy.com or use the server IP 54.85.159.138 if numeric host entry is preferred.
3. Set the server port to 8888. Note that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires selecting a transport protocol.
5. Provide mobile APN settings and any required APN username and password in the device configuration.
6. Apply or save the configuration and restart the device if the firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device status and recent messages in your Plaspy account.

## Example Configuration Commands

The public FMU126 configuration content includes a basic parameter command that can be used via SMS or other Teltonika supported configuration channels. Preserve and replace the placeholders before sending.

- SMS or command batch to set APN and Plaspy server parameters

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields
- [apn] — replace with your SIM card APN name
- [apnu] — replace with the APN username if required by your mobile operator; leave empty if not required
- [apnp] — replace with the APN password if required by your mobile operator; leave empty if not required
- 2004 sets the server domain to d.plaspy.com which is the public Plaspy host
- 2005 sets the port to 8888 which Plaspy uses for all devices
- 2006:1 typically represents enabling GPRS or selecting the active data profile depending on device firmware; follow Teltonika documentation for exact parameter meanings on your firmware

If your installation tool or firmware uses different parameter labels or a graphical configurator, perform the equivalent entries: APN values, server host d.plaspy.com or 54.85.159.138, and port 8888, then select UDP or TCP if prompted.

## Configuration Notes

- Teltonika devices commonly support SMS and GPRS based configuration; the example command above is formatted for batch parameter setting and may be sent via SMS when SMS configuration is enabled.
- Firmware versions and hardware revisions can change parameter codes and behavior. Always confirm parameter identifiers with the manufacturer documentation for your tracker firmware.
- Choose UDP or TCP according to your network and reliability needs; both transport types are supported by Plaspy on port 8888.
- Plaspy will automatically detect the tracker protocol once the device successfully connects to d.plaspy.com or 54.85.159.138 on port 8888.
- If the device does not appear in Plaspy after configuration, verify APN correctness, mobile data session establishment, and that the device can resolve or reach d.plaspy.com or the provided IP.

## Why Use Plaspy with This Configuration

Using the FMU126 with Plaspy lets organizations centralize location, event and status reporting from a capable Teltonika tracker on a single platform. The FMU126’s support for GNSS, BLE sensors, RS232 integrations, and CAN adapters makes it flexible for many use cases, and pointing it to Plaspy provides consistent visibility and monitoring within your fleet management workflow.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the latest device specific parameter meanings, firmware notes, and detailed Teltonika setup instructions verify the information on the manufacturer site https://www.teltonika-gps.com/ as device behavior and configuration commands can change with firmware and hardware revisions.
