---
slug: /megastek/mt60pro/configuration
id: mt60pro-configuration
sidebar_label: Configuration
title: Megastek - MT60PRO Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide to configure the Megastek MT60PRO ankle tracker to report to Plaspy using shared server settings and SMS or GPRS commands
keywords:
  - Megastek MT60PRO configuration
  - Megastek MT60PRO setup
  - MT60PRO Plaspy
  - Megastek tracker configuration
  - MT60PRO server configuration
  - Parolee tracker setup
  - Ankle GPS tracker configuration
  - MT60PRO GPRS setup
  - Plaspy tracker setup
  - MT60PRO SMS commands
---

# Megastek - MT60PRO Configuration

This page documents the public configuration context for using the Megastek MT60PRO ankle tracker with Plaspy. It collates the shared server values and practical setup guidance that most installers and integrators will need to point the device at Plaspy and validate that telemetry, alarms, and location updates arrive in the platform. Where manufacturer steps are required we present the publicly available SMS command examples and explain the placeholders.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools. The MT60PRO supports SMS and GPRS style configuration commands in its public documentation; use the manufacturer tools and the device IMEI when applying the commands below and verify any differences against current Megastek firmware notes.

## Configuration Overview

Configuring the MT60PRO for Plaspy prepares the tracker to send periodic position and event data to the Plaspy endpoint so the device becomes visible in your Plaspy instance and generates alerts and logs. The process typically includes setting device identity, APN for cellular data, the GPRS server endpoint, transport protocol selection, and enabling data reporting mode.

- Set the device identifier so Plaspy can associate the IMEI with an account or device record.
- Configure the cellular APN and optional APN credentials so GPRS uploads are possible.
- Point the device GPRS server to the Plaspy endpoint so location and event logs are routed to Plaspy.
- Choose UDP or TCP transport if the device requires a transport selection and set the common port used by Plaspy.
- Enable the device GPRS mode and set a reasonable update interval to control reporting frequency.
- Validate connectivity and that Plaspy receives telemetry, alarms, and status updates.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Confirm the MT60PRO has a charged battery and is powered on.  
- Ensure an active cellular SIM with data enabled is installed and APN details are available.  
- Have the device IMEI ready; many commands use the IMEI as the device ID.  
- Access to the manufacturer configuration method used by your device (SMS commands, vendor software, or provisioning tool).  
- A working SMS-capable phone or SMS gateway if configuring via SMS commands.  
- Reasonable expectation that device firmware supports the listed SMS/GPRS commands; verify firmware notes where possible.

## How This Tracker Connects to Plaspy

The MT60PRO can be configured to upload GPRS data to the shared Plaspy server endpoint and port so real-time location, tamper events, and other telemetry appear in Plaspy dashboards and workflows. Once configured to the Plaspy endpoint the device will send periodic updates and event reports that Plaspy ingests; Plaspy will detect the protocol automatically and present device data for monitoring and alerts.

- The tracker reports location and status packets to the Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.  
- Plaspy automatically detects the tracker protocol so installers only need to point the device at the correct server and port.  
- Event reports such as tamper, SOS, belt cut, and battery alerts are uploaded via GPRS and appear in Plaspy for rules and notifications.  
- Periodic position uploads are controlled by the device update interval and GPRS mode settings.  
- Remote commands and configuration changes can be relayed through Plaspy where supported by the device workflow.

## Common Configuration Workflow

1. Access the official Megastek configuration method you use for the MT60PRO (SMS commands, vendor provisioning software, or installer tool).  
2. Set the device identity or IMEI as required so Plaspy can match incoming connections to your account.  
3. Enter the Plaspy server host as d.plaspy.com or the IP 54.85.159.138.  
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.  
5. Configure the APN and any APN username or password placeholders required for cellular GPRS.  
6. Apply or save the configuration and enable GPRS or data reporting mode on the device.  
7. Restart or power cycle the device if recommended by the manufacturer.  
8. Validate the device reports to Plaspy and monitor initial telemetry and any alarms in the platform.

## Example Configuration Commands

The MT60PRO public setup examples use SMS commands. The default device password shown in public examples is 000000 — confirm and change this password according to your security policy after initial provisioning.

1. Set device ID (replace \<IMEI> with the device 15 digit IMEI)
```text
M000000,22,<IMEI>
```

2. Set operator APN (replace [apn] with your carrier APN; optional [apnu] and [apnp] are APN username and APN password)
```text
M000000,23,[apn]
```
If your APN requires username or password:
```text
M000000,23,[apn],[apnu],[apnp]
```

3. Set update interval to 60 seconds
```text
M000000,25,60
```

4. Set the GPRS server to Plaspy (public example uses an identifier then IP and port)
```text
M000000,24,56 54.85.159.138,8888
```
Note: The example sets the server using the numeric prefix shown in the public commands. You may alternatively be allowed to set the domain d.plaspy.com in some provisioning tools; confirm the exact syntax for your firmware.

5. Enable GPRS mode
```text
M000000,21,2
```

Important notes about these commands:
- 000000 is shown as the sample device password in public examples; replace with the device password or change it after provisioning.  
- Preserve placeholders such as [apn], [apnu], and [apnp]; they must be replaced with your carrier APN values.  
- The order of commands matters for initial provisioning: set APN first, then server and reporting mode.  
- If your provisioning method supports the domain d.plaspy.com, you can use that in place of the IP; both domain and IP are publicly provided.

## Configuration Notes

- Firmware differences may change exact SMS syntax or supported parameters; always verify commands against the device firmware revision.  
- SMS provisioning is commonly used in publicly available examples, but vendor software or an MDM tool may offer a safer bulk configuration workflow.  
- Choose UDP or TCP transport according to installer preference; Plaspy supports both and auto-detects the protocol on connection.  
- Because Plaspy uses the same port 8888 for all supported devices, confirm the server host and port are applied exactly as shown.  
- After provisioning, monitor the first connection in Plaspy to confirm the IMEI and device identity match the expected record.

## Why Use Plaspy with This Configuration

Using the MT60PRO with Plaspy centralizes tracking, alerts, and event history for supervised persons in a single platform. The shared Plaspy server settings and automatic protocol detection reduce complexity for installers: by pointing the device at d.plaspy.com or 54.85.159.138 on port 8888 and enabling GPRS reporting, devices typically start delivering location and alarm data into Plaspy for rules, notifications, and case management.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup details and command syntax on the official Megastek site https://www.megastek.com/ before deploying devices in the field.
