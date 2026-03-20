---
slug: /enfora/mini_mt/configuration
id: mini_mt-configuration
sidebar_label: Configuration
title: Enfora - Mini MT Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Enfora Mini MT with Plaspy server settings commands and workflow for fast integration
keywords:
  - Enfora Mini MT configuration
  - Enfora Mini MT setup
  - Enfora GPS tracker Plaspy
  - Mini MT server configuration
  - Enfora Mini MT GPS platform setup
  - Mini MT Plaspy integration
  - Enfora tracker setup guide
  - GPRS tracker configuration
  - personal tracker Enfora Mini MT
  - vehicle tracking Enfora Mini MT
---

# Enfora - Mini MT Configuration

This page documents the public configuration context for using the Enfora Mini MT tracker with Plaspy. It pulls together the practical server settings, sample AT commands, and a recommended workflow based on the device description and the available manufacturer-style configuration snippets. Use this guide to prepare the Mini MT for connectivity to Plaspy while keeping device-level details aligned with the manufacturer documentation.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol on connection. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools; follow your device-specific Enfora instructions in parallel with the steps and commands shown here.

## Configuration Overview

The goal of configuration is to point the Mini MT to Plaspy's shared server endpoint, select the correct transport, enable reporting events, and verify the device appears in Plaspy. Where available, the device accepts AT style commands to set APN, server endpoints, port, and event reporting rules.

- Set the Mini MT APN and network registration settings so the device has GPRS connectivity
- Configure the device to report to Plaspy using the shared server endpoint and port
- Enable or tune periodic and event-driven reporting so locations and alerts arrive in Plaspy
- Save and apply settings and reboot the tracker to activate the new configuration
- Validate connectivity and visibility inside Plaspy to confirm the tracker protocol was detected automatically

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (device may be configured using either UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered Enfora Mini MT with access to the manufacturer configuration method or utility
- A valid SIM card and active GPRS data service appropriate for the device (device provides GSM GPRS communications)
- Access to send AT commands or use the official Enfora configuration tool as required by your device
- The APN information from your mobile provider (keep placeholders such as {{apn}} if needed)
- Basic understanding of the device event reporting model so you can enable or adjust needed events
- A method to reboot or reset the device after configuration if required

## How This Tracker Connects to Plaspy

The Mini MT is configured to report location and device events to the shared Plaspy server endpoint and port. Once the tracker has mobile data connectivity and the server and port are applied, Plaspy will detect the device protocol and begin ingesting messages.

- The tracker points to d.plaspy.com or directly to the IP 54.85.159.138 as the destination server
- The tracker sends messages to port 8888; Plaspy accepts TCP or UDP on that port
- Plaspy automatically detects the tracker protocol so you do not need to preselect a protocol in the platform
- Event rules on the device (for time reports, inputs, battery, GPS antenna, ignition, etc.) control what is sent to Plaspy
- After successful configuration the device becomes visible in Plaspy for monitoring and event analysis

## Common Configuration Workflow

1. Access the official Enfora configuration method or software for the Mini MT (manufacturer tool, serial console, or vendor-provided utility).  
2. Enter d.plaspy.com or the direct IP 54.85.159.138 as the primary reporting server.  
3. Set the server port to 8888 (all devices in Plaspy use the same port).  
4. Choose UDP or TCP if the tracker requires an explicit transport selection.  
5. Configure APN and any network authentication required using placeholders such as {{apn}}, {{apnu}}, and {{apnp}} where appropriate.  
6. Apply or save the configuration and use the device command to persist settings (for example AT&W).  
7. Restart or reset the device if required to activate new settings and verify the device reports to Plaspy.  
8. Validate connectivity and event reporting inside Plaspy to confirm the device is visible and reporting.

## Example Configuration Commands

The following AT command sequence is a public-style example that configures APN, sets the Plaspy server, enables UDP reporting on port 8888, activates several event reports, saves configuration, and then resets the device. Preserve placeholders and change them to your actual values before sending.

- Initial factory reset and write settings example
```text
AT&F
AT&W
```

- Configure APN (replace {{apn}} with your mobile provider APN)
```text
AT+CGDCONT=1,"IP","{{apn}}"
```

- Optional GPRS authentication (only if your SIM/APN requires username or password)
```text
AT%CGPCO=1,"{{apnu}},{{apnp}}",0
```
Note: {{apnu}} is the APN username placeholder and {{apnp}} is the APN password placeholder.

- Point the tracker to Plaspy by IP and set UDP API port 8888
```text
AT$FRIEND=1,1,"54.85.159.138"
AT$UDPAPI=,8888
AT$WAKEUP=1,1
```

- Time-based reporting and event configuration examples
```text
' Time report every 60 seconds
AT$EVTIM4=60
AT$EVENT=9,1,12,1,1
AT$EVENT=9,3,40,2,28905678
AT$EVENT=9,3,60,2,28905678
```

- Reporting by input 1
```text
AT$EVENT=10,0,0,1,1
AT$EVENT=10,3,40,1,28905678
AT$EVENT=10,3,60,1,28905678
```

- Reporting by input 2
```text
AT$EVENT=12,0,1,1,1
AT$EVENT=12,3,40,4,28905678
AT$EVENT=12,3,60,4,28905678
```

- Battery disconnect and connect reporting
```text
AT$EVENT=14,0,3,0,0
AT$EVENT=14,3,40,6,28905678
AT$EVENT=14,3,60,6,28905678

AT$EVENT=17,0,3,1,1
AT$EVENT=17,3,40,17,28905678
AT$EVENT=17,3,60,22,28905678
```

- GPS antenna disconnect and connect reporting
```text
AT$EVENT=15,0,71,2,3
AT$EVENT=15,3,40,7,28905678

AT$EVENT=16,0,71,1,1
AT$EVENT=16,3,40,16,28905678
```

- Ignition on and off reporting
```text
AT$EVENT=37,0,7,1,1
AT$EVENT=37,3,40,2,28905678

AT$EVENT=38,0,7,0,0
AT$EVENT=38,3,40,3,28905678
```

- Channel registration and final save then optional reset
```text
AT$AREG=2
AT&W
```

- Optional: perform a reset to apply settings immediately
```text
AT$RESET
```
Label: Optional device reset to restart and apply configuration when needed.

## Configuration Notes

- Firmware variations and hardware revisions can change available AT commands or parameter formats; always confirm with the device firmware notes.
- Choose UDP or TCP based on your installation preferences; both are supported by Plaspy on port 8888 and Plaspy will auto-detect the protocol in use.
- Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your provider credentials when required.
- Use the manufacturer's official configuration tool or supported interfaces to send AT commands; improperly formatted commands can affect device behavior.
- Save configuration (for example with AT&W or the equivalent) before resetting the device to ensure changes persist across power cycles.

## Why Use Plaspy with This Configuration

Configuring the Enfora Mini MT to report to Plaspy gives organizations a simple path to consistent device visibility and event reporting. Using the shared Plaspy server endpoint and port simplifies deployment across mixed fleets because Plaspy uses the same port for all supported devices and automatically detects the device protocol on connection.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current and device specific instructions, firmware notes, and official support resources verify the details on the manufacturer site http://www.enfora.com/ as device behavior and configuration steps can change with firmware and hardware revisions.
