---
slug: /noran/nr108/configuration
id: nr108-configuration
sidebar_label: Configuration
title: Noran - NR108 Configuration
sidebar_class_name: menu_item_tracker
description: Public NR108 configuration guide for connecting Noran NR108 trackers to Plaspy using shared server settings and SMS or GPRS setup
keywords:
  - Noran NR108 configuration
  - NR108 setup Plaspy
  - Noran GPS tracker configuration
  - NR108 server setup
  - Noran NR108 SMS commands
  - NR108 APN configuration
  - NR108 GPRS setup
  - Noran NR108 integration
  - NR108 Plaspy compatibility
  - Noran GPS platform setup
---

# Noran - NR108 Configuration

This page documents the public configuration context for using the Noran NR108 tracker with Plaspy. It consolidates the known, publicly available setup steps and server settings that prepare the NR108 to report location and telemetry to Plaspy. Where manufacturer-side commands are publicly available they are included below as examples for use with SMS-based configuration or the device's configuration tool.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The NR108 supports reporting over GPRS (Internet) and SMS with LBS fallback, and the examples below show how to point the device at Plaspy’s shared server and verify basic connectivity.

## Configuration Overview

The configuration process prepares the NR108 to send position and event data to Plaspy and to be visible in the Plaspy platform. For NR108 units, common setup uses the device's SMS command interface to set APN, server, and GPRS mode so the tracker can upload over mobile data.

- Set the operator APN so the NR108 can establish GPRS connectivity to Plaspy.
- Configure the device to report to Plaspy’s shared server endpoint and port.
- Choose the transport option (UDP or TCP) if the device requires explicit selection.
- Switch the tracker into GPRS/Internet reporting mode and verify connection status.
- Use the included query command to confirm device ID, APN, server, port, and GPRS status so the unit is visible in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport support: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered NR108 unit with access to its SMS or configuration interface and the installer manual.  
- A working SIM card with voice/SMS and mobile data (GPRS) enabled and a known operator APN.  
- A phone capable of sending SMS configuration commands to the device, or access to the official Noran configuration tool when available.  
- Knowledge of the device password; many NR108 examples use the default password 000000 for initial setup.  
- Basic visibility to the device (installed or bench) so you can confirm responses to SMS queries and observe LED or status indicators if present.  
- Access to Plaspy to validate that the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

The NR108 is configured to report position and alarms to Plaspy’s shared server endpoint and port so Plaspy can process, display, and alert on telemetry. Reporting can occur over GPRS (Internet) when the APN and server are set or via SMS for limited reporting and fallback.

- The tracker is pointed at the Plaspy server (d.plaspy.com or 54.85.159.138) and port 8888 for data uploads.  
- The device sends telemetry and position packets over GPRS when a data connection is available.  
- Alarms such as overspeed, geo-fence, SOS, power-cut, and fuel telemetry can be reported to Plaspy and used to trigger alerts.  
- LBS fallback and SMS can provide limited reporting when GPS or GPRS coverage is poor.  
- Plaspy receives data on the same port for all devices and automatically detects the device protocol for correct parsing.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or SMS command interface described in the Noran documentation.  
2. Set the operator APN using the device’s SMS command or configuration tool and confirm it is stored.  
3. Enter the Plaspy server domain or IP (d.plaspy.com or 54.85.159.138) into the device and set port 8888.  
4. Choose transport UDP or TCP if the NR108 requires an explicit transport selection.  
5. Switch the device to GPRS/Internet reporting mode and save or apply the configuration.  
6. Restart or power-cycle the NR108 if recommended by the manufacturer to apply network changes.  
7. Validate the device reports to Plaspy by querying the tracker and checking the Plaspy platform for incoming messages.

## Example Configuration Commands

The NR108 supports SMS-based configuration. The public example commands below use the device password placeholder and must be sent as SMS messages to the tracker from an authorized phone number. The sample commands assume the device password is 000000 by default. Preserve the placeholders shown as [apn], [apnu], and [apnp] and replace them with your operator values when you send the SMS.

- Set operator APN (replace [apn] and optional username and password):
```
A000000,012,[apn]
```
Optional with APN username and password:
```
A000000,012,[apn],[apnu],[apnp]
```

- Set the GPRS server to Plaspy using the server IP and port (public example):
```
A000000,010,54.85.159.138,8888
```
(You may also set the server by domain name if supported by your device configuration tool using d.plaspy.com in place of the IP.)

- Switch device to GPRS mode:
```
A000000,011,1
```

- Check settings and device status (returns device Id, APN, server, port, GPRS status, connection status, signal):
```
A000000,004
```

Notes about placeholders and defaults:
- [apn] stands for your mobile operator APN value.  
- [apnu] and [apnp] are optional APN username and APN password fields used by some operators.  
- The example commands use the public Plaspy server IP and port shown above; you can substitute d.plaspy.com if your device accepts domain names.  
- The default device password in public examples is 000000; if the password has been changed on your unit use the current password when sending commands.

## Configuration Notes

- Default password 000000 is commonly shown in public setup examples; confirm the correct password for your device before sending commands.  
- Some NR108 firmware versions or hardware revisions may accept domain names (d.plaspy.com) while others require numeric IP; use the method supported by your firmware.  
- Choose UDP or TCP according to the device prompt when required; Plaspy supports either transport on the shared port and auto-detects the protocol.  
- SMS-based configuration is widely used for NR108 initial setup; keep an authorized phone number and SMS capability available during installation.  
- Always consult the manufacturer's documentation for firmware specific commands and behavior differences before applying changes.

## Why Use Plaspy with This Configuration

Configuring the NR108 to report to Plaspy provides centralized visibility of location, alarms, and fuel telemetry so fleet operators and service teams can monitor assets, respond to incidents, and analyze usage. The NR108’s small form factor and low-data reporting are well suited to vehicles where discreet installation and reduced connectivity costs matter.

To learn more about Plaspy and how the platform collects and displays device data, visit https://www.plaspy.com. For the most current device-specific configuration commands, firmware behavior, and detailed NR108 documentation, verify setup steps on the manufacturer site http://www.norantracker.com/ as specifications and command formats can change over time.
