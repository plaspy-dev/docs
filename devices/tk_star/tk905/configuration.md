---
slug: /tk_star/tk905/configuration
id: tk905-configuration
sidebar_label: Configuration
title: TK-Star - TK905 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the TK-Star TK905 for use with Plaspy using the shared Plaspy server settings and SMS commands
keywords:
  - TK-Star TK905 configuration
  - TK905 setup Plaspy
  - TK-Star GPS tracker configuration
  - TK905 server configuration
  - TK905 SMS commands
  - Plaspy tracker configuration
  - vehicle tracking setup
  - GPS tracker integration
  - TK905 GPRS configuration
  - tracker server settings
---

# TK-Star - TK905 Configuration

This page describes the public configuration context for using the TK-Star TK905 tracker with Plaspy. It collects the essential, publicly available setup information you need to point the device at Plaspy servers and validate connectivity so the tracker reports location and events into Plaspy for mapping and fleet management.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the TK905 can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and SMS sequences below as practical, public examples rather than an exhaustive manufacturer manual.

## Configuration Overview

The configuration process prepares the TK905 to communicate reliably with the Plaspy platform and to appear correctly on Plaspy maps and alerts. For the TK905 this commonly involves setting the mobile operator APN, specifying Plaspy as the GPRS server endpoint, selecting the transport mode if required, and enabling regular uploads.

- Configure the device APN so it can use cellular data for GPRS reporting.
- Point the tracker to Plaspy server settings so location and event data are received by the platform.
- Choose the transport mode (UDP or TCP) if the device requires a transport selection.
- Set an appropriate upload interval to balance update frequency and battery or data usage.
- Optionally restore or verify device defaults when performing first time installation or troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged TK905 with access to its SMS configuration interface or the official TK-Star configuration tool or app.  
- A valid active SIM card with data and SMS capability installed in the tracker and any required PIN disabled.  
- Operator APN details (APN name and, if required, APN username and password).  
- The device default password (the public TK905 default password used in sample commands is 123456).  
- Access to the manufacturer documentation or support resources for the specific hardware revision and firmware version.

## How This Tracker Connects to Plaspy

The TK905 is configured to report location fixes and events to Plaspy by sending GPRS packets to the shared Plaspy endpoint and port. Plaspy ingests these uploads and presents them as real-time positions, event alerts, and historical routes in the platform.

- The tracker is pointed at the Plaspy server endpoint (domain or IP) and port so GPRS uploads reach Plaspy.  
- Plaspy receives periodic upload packets according to the tracker upload interval and shows live locations.  
- Event messages such as movement alerts and alarms are forwarded to Plaspy as device events.  
- Plaspy automatically detects the tracker protocol so no additional protocol registration is required on the platform side.  
- Using the shared Plaspy port and server ensures consistent handling across many tracker models.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TK905 (SMS commands, vendor app, or official tool) as described in the device manual.  
2. Prepare APN information from your mobile operator and the device default password (commonly 123456 for public examples).  
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 when the device requests a server address.  
4. Set the port to 8888, and choose UDP or TCP if the device requires explicit transport selection.  
5. Apply or save the configuration on the device (send the SMS commands or save within the configuration tool).  
6. Restart or power-cycle the device if the manufacturer instructions recommend doing so after configuration.  
7. Validate that the device reports to Plaspy by confirming incoming position or event data on the platform.

## Example Configuration Commands

The TK905 supports SMS-based configuration. The sample public command sequence below uses the device default password 123456. Keep the same order where indicated; some commands such as factory restore are optional and only recommended during initial setup or troubleshooting.

- Optional: restore factory settings (initial setup or troubleshooting)
```text
begin123456
```

- Set operator APN (replace [apn] with your mobile operator APN)
```text
apn123456 [apn]
```

- Set APN username if required by your operator (replace [apnu] with APN username)
```text
apnuser123456 [apnu]
```

- Set APN password if required by your operator (replace [apnp] with APN password)
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to Plaspy using the public IP and port shown in Plaspy documentation
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust value as needed)
```text
upload123456 60
```

- Switch the device to GPRS reporting mode
```text
gprs123456
```

Notes on placeholders: [apn] is the mobile operator APN string, [apnu] is the APN username, and [apnp] is the APN password. Replace these placeholders with the values provided by your SIM operator.

## Configuration Notes

- SMS based configuration is commonly used for the TK905; ensure your SMS is sent from a number the device accepts or follow any security rules in the device manual.  
- Different firmware versions or hardware revisions may change command names or required parameters; verify the exact SMS commands for your unit before applying changes.  
- Choose UDP or TCP according to your installer preference or network conditions; the Plaspy server accepts either and will detect the protocol automatically.  
- Plaspy uses the same port 8888 for all supported trackers, so you do not need a different port per device.  
- Always confirm APN, username, and password with your mobile operator before configuring the device.

## Why Use Plaspy with This Configuration

Pointing a TK-Star TK905 at Plaspy provides a practical way to bring the tracker’s real-time location, movement alerts, and route history into a unified fleet management environment. Using the shared Plaspy server settings and automatic protocol detection simplifies onboarding multiple devices and reduces per-device configuration overhead for mixed fleets.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and hardware details for the TK905, verify the manufacturer documentation at https://www.tk-star.com/ since setup methods and behaviour can change with firmware and hardware revisions.
