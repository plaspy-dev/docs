---
slug: /nvs/signal_s_2115/configuration
id: signal_s_2115-configuration
sidebar_label: Configuration
title: NVS - SIGNAL S-2115 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for NVS SIGNAL S-2115 showing server settings and SMS commands to connect the tracker to Plaspy
keywords:
  - NVS SIGNAL S-2115 configuration
  - NVS SIGNAL S-2115 setup
  - SIGNAL S-2115 Plaspy
  - NVS tracker configuration
  - vehicle tracking setup
  - GPS tracker configuration
  - fleet management setup
  - GNSS tracker integration
  - tracker SMS commands
  - Plaspy server configuration
---

# NVS - SIGNAL S-2115 Configuration

The following page covers public configuration context for using the NVS SIGNAL S-2115 tracker with Plaspy. It consolidates the known, publicly available setup steps and SMS commands commonly used to prepare the device to report location and status into the Plaspy platform. The SIGNAL S-2115 is a mobile automotive monitoring kit that uses GNSS signals and an open information exchange protocol, making it suitable for integration with third party systems such as Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example SMS commands included here reflect public instructions and show how APN, server address, transport, and GPRS mode are typically configured; always verify details against your device firmware and NVS documentation when necessary.

## Configuration Overview

This configuration prepares the SIGNAL S-2115 to send position and device data to Plaspy so the unit becomes visible and manageable inside the platform. The public setup flow typically configures network access, the remote server endpoint, transport mode, and basic reporting behavior.

- Configure APN and optional APN credentials so the device can establish a GPRS data session.
- Point the device to Plaspy by setting the server address and the shared port used by Plaspy.
- Choose the transport type (UDP or TCP) if required by the device firmware.
- Enable GPRS reporting mode so the tracker actively sends data to Plaspy.
- Verify the device parameters and confirm the tracker is reporting to Plaspy using a check command or platform connectivity indicator.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered SIGNAL S-2115 unit with access to its SMS or manufacturer configuration interface.  
- A SIM card with an active data plan and SMS capability configured in the device.  
- The mobile operator APN value and optional APN username and password (placeholders shown below as {{apn}}, {{apnu}}, {{apnp}}).  
- Access to SMS sending from a phone or a manufacturer provisioning tool as specified by NVS.  
- Knowledge of the device default password (public example below uses the default password 123456) and the ability to change it if needed.  
- Manufacturer documentation or access to firmware notes in case the command syntax differs by firmware revision.

## How This Tracker Connects to Plaspy

When configured, the SIGNAL S-2115 establishes a GPRS data session to the Plaspy server endpoint and sends periodic or event-driven reports so the device is visible within the Plaspy platform. Plaspy receives the incoming data on the shared server endpoint and port and maps the device to the platform interface using automatic protocol detection.

- The tracker is pointed to the Plaspy server domain or IP and the shared port 8888.  
- The device opens a GPRS connection using the configured APN and credentials, if required.  
- Data is transmitted over TCP or UDP depending on the device transport selection.  
- Plaspy detects the tracker protocol automatically and decodes incoming messages for location and status.  
- Successful configuration allows real time visibility and event reporting in Plaspy.

## Common Configuration Workflow

1. Confirm the device is powered, has a working SIM with data and SMS enabled, and consult the official NVS configuration method or software.  
2. Using NVS recommended tools or SMS commands, set the operator APN and optional APN credentials (use {{apn}}, {{apnu}}, {{apnp}} placeholders as required).  
3. Enter the Plaspy server endpoint by specifying d.plaspy.com or 54.85.159.138 on the device.  
4. Set the port to 8888 on the tracker configuration page or via SMS and select UDP or TCP if the tracker requires transport selection.  
5. Apply or save the configuration on the tracker and send any required commands to enable GPRS reporting mode.  
6. Restart the device if the firmware requires a reboot for settings to take effect.  
7. Validate that the device reports to Plaspy using the device check command or by confirming the device appears in Plaspy.

## Example Configuration Commands

The following commands are the public SMS-format commands provided in the manufacturer-supplied example. The device password in these examples is the factory default 123456. Preserve placeholders and replace them with your operator values.

- Optional initial factory reset (only if you need to return the device to defaults):
```text
begin123456
```

- Set the device time zone to UTC+0:
```text
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your operator APN):
```text
apn123456 {{apn}}
```

- Set the APN username and password if your operator requires them (replace placeholders as needed):
```text
up123456 {{apnu}} {{apnp}}
```

- Set the GPRS server to Plaspy using the Plaspy IP and port 8888:
```text
adminip123456 54.85.159.138 8888
```
You can alternatively use the server domain if supported by the device configuration interface:
```text
adminip123456 d.plaspy.com 8888
```

- Switch the tracker to GPRS mode (two common forms shown; use the syntax supported by your firmware):
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Verify current settings on the device:
```text
check123456
```

Notes on placeholders:
- {{apn}} is the mobile operator APN string required for data.  
- {{apnu}} and {{apnp}} are the APN username and password when the operator requires credentialed access.

## Configuration Notes

- SMS-based provisioning is shown in the public example; some installations use a manufacturer tool or configuration cable instead. Follow whatever method NVS recommends for your firmware.  
- Behavior and exact command syntax can differ across firmware revisions and hardware variants; always test on a single device before mass deployment.  
- Choose UDP or TCP according to your network conditions and the device firmware support; Plaspy accepts either on port 8888 and will detect the protocol automatically.  
- Keep the device password secure; the public example uses default password 123456 which should be changed after initial setup if supported.  
- When possible, use the domain d.plaspy.com for readability, or the IP 54.85.159.138 if DNS is not available in the device environment.

## Why Use Plaspy with This Configuration

Using the SIGNAL S-2115 with Plaspy gives fleet and operations teams a straightforward path to integrate a certified GNSS receiver into a modern tracking and dispatching platform. With the public SMS commands and shared Plaspy endpoint, the device can be quickly pointed to the platform so location and event data flow into Plaspy for monitoring, reporting, and dispatch use cases.

To learn more about Plaspy and how it can work with NVS devices visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware notes, and official documentation verify details on the manufacturer website https://www.nvs-ts.ru/. Manufacturer specifications and setup methods can change over time so check the official resources when planning deployment.
