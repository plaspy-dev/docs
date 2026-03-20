---
slug: /totemtech/at09/configuration
id: at09-configuration
sidebar_label: Configuration
title: Totemtech - AT09 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Totemtech AT09 configuration and Plaspy server settings for GPS tracker integration
keywords:
  - Totemtech AT09 configuration
  - Totemtech AT09 setup
  - AT09 server configuration
  - AT09 GPS tracker Plaspy
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet tracking AT09
  - GPS tracker configuration guide
  - AT09 SMS configuration
  - Totemtech tracker commands
---

# Totemtech - AT09 Configuration

This page covers the public configuration context for using the Totemtech AT09 GPS tracker with Plaspy. It consolidates the Plaspy server settings you will need, explains the typical setup workflow, and provides the publicly available SMS commands published for the AT09 so you can configure the device to report to Plaspy.

Plaspy uses shared server settings across supported devices and will automatically detect your tracker protocol when the device reports to the platform. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools; this guide focuses on the public values and commands needed to prepare the AT09 for successful connection to Plaspy.

## Configuration Overview

The goal of the configuration process is to prepare the AT09 to send position, status, and event data to the Plaspy platform so the device becomes visible and manageable from Plaspy. The AT09 supports SMS and GPRS configuration methods commonly used by installers, and the public SMS commands below are an example of a typical setup flow.

- Assign the correct APN and GPRS credentials so the tracker can use mobile data to reach Plaspy.
- Point the device to Plaspy using the shared server domain or IP and the standard Plaspy port.
- Choose the transport protocol (UDP or TCP) if required by the device, then save and apply the settings.
- Validate connectivity so Plaspy receives the first position or heartbeat from the tracker and automatically detects its protocol.
- Configure reporting intervals and acknowledgment behavior to match your monitoring needs and data plan.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for server communication

## Typical Requirements Before Setup

- Power the AT09 with a stable supply and confirm LEDs indicate normal device status.
- A working SIM card with a data plan and the correct APN for the mobile operator.
- Access to the device configuration method supported by the AT09, for example SMS commands or the official Totemtech configuration tool.
- Knowledge of the device password; the public example uses the default password 000000.
- Basic familiarity with sending SMS commands or using the Totemtech configuration interface.
- An account on Plaspy or contact with your Plaspy administrator to confirm device visibility once it is reporting.

## How This Tracker Connects to Plaspy

When configured, the AT09 is set to send GPRS data to the shared Plaspy server endpoint and port so Plaspy can receive telemetry and location updates and detect the device protocol automatically. The AT09 supports sending data to two servers simultaneously, which can be used for redundancy alongside Plaspy.

- The tracker establishes a GPRS connection and posts data to d.plaspy.com or to 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on installer preference or firmware support.
- Plaspy receives device packets and automatically identifies the tracker protocol so no manual protocol selection in Plaspy is normally required.
- Once reporting, the device appears in Plaspy for live tracking, history traces, and event monitoring.
- Acknowledgment and reporting interval settings can be configured on the device to control reliability and data usage.

## Common Configuration Workflow

1. Access the official Totemtech configuration method or software, or prepare to send SMS configuration commands as documented by the manufacturer.
2. Enter the Plaspy server endpoint by using either d.plaspy.com or the IP address 54.85.159.138 in the device settings.
3. Set the server port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if a transport selection is required.
5. Configure APN and GPRS credentials so the tracker can connect to mobile data services.
6. Apply or save the configuration on the device and restart the tracker if the device or manufacturer instructions require it.
7. Validate that the device reports to Plaspy and that the platform detects the protocol and shows incoming telemetry.

## Example Configuration Commands

The AT09 supports SMS-based configuration. The public sample commands below use the default device password 000000. Replace placeholders with your actual values where noted. The factory reset command is optional and should be used only if you need to reset the device to defaults.

- Factory reset (optional initial setup)
``` 
*000000,007#
```

- Set the operator APN (replace placeholders with your operator credentials)
```
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explanation of placeholders:
- {{apn}} is the operator APN name (for example internet)
- {{apnu}} is the APN username when required by the operator, otherwise leave blank
- {{apnp}} is the APN password when required by the operator, otherwise leave blank

- Set the GPRS server to Plaspy using the Plaspy server IP and port and enable primary server slot
```
*000000,003,54.85.159.138,8888,1
```
This points the AT09 to Plaspy at 54.85.159.138 on port 8888. You may alternatively use the domain d.plaspy.com if your device supports domains instead of IP.

- Set ACK behavior
```
*000000,019,1#
```

- Set the update interval to 60 seconds
```
*000000,60,60,0,60#
```

Note: Preserve the default password if it has not been changed. If your device has a different password, replace 000000 with the active device password in these commands.

## Configuration Notes

- Firmware versions and hardware revisions can change command syntax and features; always confirm command compatibility with your device's firmware release.
- The AT09 supports SMS-based configuration as shown here; Totemtech configuration software or tools may also be available and provide a GUI alternative.
- Choose UDP for lower overhead or TCP if you require connection reliability, remembering Plaspy supports both transports on port 8888.
- APN, APN username, and APN password are operator specific; use the exact values provided by your SIM operator and keep placeholders intact when preparing commands.
- If you configure both server slots, you can use the AT09 dual server capability for redundancy and point one slot to Plaspy and the other to a backup endpoint if needed.

## Why Use Plaspy with This Configuration

Using the Totemtech AT09 with Plaspy provides a practical way to centralize vehicle tracking, status monitoring, and event reporting within a single platform. With the AT09 configured to report to Plaspy on the shared server endpoint and port, organizations can quickly gain visibility into assets, monitor historical traces, and receive alerts based on the device data.

To learn more about Plaspy and how it integrates with devices like the Totemtech AT09 visit https://www.plaspy.com. For device specific firmware behavior and the latest command syntax always verify current information on the manufacturer site http://www.totemtek.com/ .
