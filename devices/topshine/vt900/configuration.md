---
slug: /topshine/vt900/configuration
id: vt900-configuration
sidebar_label: Configuration
title: TopShine - VT900 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the TopShine VT900 tracker to Plaspy servers using SMS or GPRS
keywords:
  - TopShine VT900 configuration
  - VT900 setup
  - TopShine GPS tracker configuration
  - VT900 Plaspy setup
  - vehicle tracking VT900
  - GPS tracker server configuration
  - fleet management VT900
  - VT900 GPRS configuration
  - TopShine tracker SMS commands
  - Plaspy tracker configuration
---

# TopShine - VT900 Configuration

This page covers the public configuration context for using the TopShine VT900 tracker with Plaspy. It collects the practical, publicly available settings and SMS command examples needed to point the VT900 at Plaspy so the device can report location and status to the Plaspy tracking platform.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The VT900 supports SMS and GPRS (TCP/UDP) configuration; the examples below include SMS command templates that are publicly documented for initial setup.

## Configuration Overview

The configuration process prepares the VT900 to communicate reliably with Plaspy so that position and event data appear in the platform. The steps typically cover server and APN configuration, transport selection, and verification that the device reports successfully.

- Point the VT900 to the Plaspy server endpoint and port so data is routed to the Plaspy platform.
- Configure the device APN and GPRS mode so the tracker can establish a cellular data session.
- Select transport (UDP or TCP) if the device requires an explicit choice and ensure the correct port is set.
- Validate connectivity by checking device reporting and using the IMEI query command to confirm device identity.
- Save and apply changes, then confirm visibility on Plaspy so vehicles and alerts are visible in the platform.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and all devices use the same port for communication

These values are the public Plaspy configuration settings that the VT900 should use when configured for GPRS reporting.

## Typical Requirements Before Setup

- A VT900 device with power and required wiring connected according to the installer guide.  
- A working cellular SIM that supports GPRS data and SMS for initial configuration if using SMS commands.  
- The device IMEI number available (often printed on the device label or retrievable via SMS).  
- Knowledge of the device password; the public SMS examples use the default password 000000.  
- Access to the manufacturer documentation or configuration tool for the VT900 to reference command details and confirm firmware behavior.  
- A test procedure to verify reporting to Plaspy after applying settings, such as checking device presence in the platform or verifying location updates.

## How This Tracker Connects to Plaspy

The VT900 can send location and event data to Plaspy over GPRS using TCP or UDP. When configured with the Plaspy server settings, the tracker establishes a data session to the Plaspy endpoint and begins reporting according to its configured reporting interval and event rules.

- The device is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).  
- Plaspy automatically detects the tracker protocol so the platform can interpret incoming messages without manual protocol selection on the server side.  
- The VT900 can be set to report periodically or on events so locations and alerts appear on Plaspy for monitoring and historical playback.  
- Typical reported items include position updates and device events that the VT900 supports; these are visible in Plaspy once the tracker successfully connects.  
- Use the platform to confirm device visibility and to monitor connectivity status after configuration.

## Common Configuration Workflow

1. Access the official TopShine VT900 configuration method or manufacturer documentation; choose SMS or the vendor configuration tool depending on your environment.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server configuration area.  
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).  
4. Choose UDP or TCP if the VT900 requires an explicit transport selection for GPRS.  
5. Configure the device APN, username, and password for the SIM in the tracker so GPRS can be established.  
6. Apply or save the configuration and restart the device if the VT900 or the manufacturer guide requests a reboot.  
7. Validate that the device reports to Plaspy by checking the platform for the device IMEI and seeing position updates or by using the IMEI query SMS.

## Example Configuration Commands

The VT900 supports SMS-based configuration using the device password and SMS command syntax. The following are the publicly available SMS command templates from the manufacturer documentation. The examples use the default password 000000 in the template. Replace placeholders and values as required.

- Optional initial factory reset (use only when needed):
```text
W000000,990,099###
```

- Set the device ID (replace {{IMEI_FIRST14}} with the first 14 digits of the device IMEI; Plaspy typically uses the full 15-digit IMEI as the device identifier on the platform):
```text
W000000,010,{{IMEI_FIRST14}}
```

- Set the operator APN. Replace [apn] with your SIM operator APN. If the APN requires username and password, append ,[apnu],[apnp]:
```text
W000000,011,[apn]            (or) W000000,011,[apn],[apnu],[apnp]
```
Explanation: [apn] is the mobile network APN string. [apnu] and [apnp] are optional APN username and password placeholders.

- Set the GPRS server to the Plaspy public server IP and port:
```text
W000000,012,54.85.159.138,8888
```
Note: If your VT900 supports domain names, you may alternatively enter d.plaspy.com in device settings depending on the tracker's command set or configuration interface.

- Switch the device to GPRS mode:
```text
W000000,013,2
```

- Set the reporting update interval (example uses value 6; consult the device manual to confirm the meaning of interval values):
```text
W000000,014,6
```

- Query the device IMEI (verification command):
```text
W000000,601
```

Use SMS to send these commands from an authorized phone number and replace the placeholders with your actual values. Keep the device password (default shown as 000000) secure and change it if required by your security policy.

## Configuration Notes

- Firmware differences and hardware revisions can change command syntax or available options; always verify the exact command structure in the VT900 manual for your firmware version.  
- The VT900 supports SMS and GPRS configuration; SMS commands are useful for remote or field configuration when direct physical access is limited.  
- When choosing between TCP and UDP, check the device firmware behavior and your network environment; both transports are supported by Plaspy on port 8888.  
- Confirm the correct APN, and APN credentials with your SIM operator before setting the tracker to GPRS mode.  
- If you use the factory reset command, label it as optional and only perform a reset when necessary during initial provisioning or troubleshooting.

## Why Use Plaspy with This Configuration

Using the TopShine VT900 configured to report to Plaspy gives organizations a practical way to centralize vehicle locations and event reporting. With the VT900 reporting regularly to the shared Plaspy endpoint, fleet managers gain platform visibility for monitoring, alerts, and historical tracking.

Learn more about Plaspy on the main website https://www.plaspy.com and verify any device specific configuration steps, firmware behavior, and manufacturer details on the TopShine official site https://www.gztopshine.com/ to ensure the instructions match your device revision and firmware version.
