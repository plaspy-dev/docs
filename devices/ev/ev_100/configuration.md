---
slug: /ev/ev_100/configuration
id: ev_100-configuration
sidebar_label: Configuration
title: EV - EV-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EV EV-100 tracker integration with Plaspy including server settings SMS commands and setup workflow
keywords:
  - EV EV-100 configuration
  - EV-100 setup Plaspy
  - EV GPS tracker configuration
  - EV vehicle tracker setup
  - EV-100 server configuration
  - Plaspy device integration
  - GPS tracker SMS commands
  - EV-100 APN configuration
  - vehicle tracking platform setup
  - fleet tracking EV-100
---

# EV - EV-100 Configuration

This page covers the public configuration context for using the EV EV-100 GPS tracker with Plaspy. It summarizes the Plaspy server settings and presents the manufacturer-provided SMS commands and workflow that are commonly used to prepare an EV-100 to report location and events into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The EV-100 supports SMS and GPRS based configuration, and the sample SMS commands below use the device default password 123456 unless you have changed it.

## Configuration Overview

This configuration process prepares the EV-100 to communicate with Plaspy by configuring time zone, network APN, and the device server endpoint so the unit can report position and alarms to the platform.

- Set device time zone and basic parameters so timestamps match your account.
- Configure the mobile operator APN so the tracker can use GPRS for real time reporting.
- Enable or set the device server address so the EV-100 sends data to Plaspy.
- Select transport (UDP or TCP) if the device requires a transport type selection.
- Validate connectivity so the device becomes visible in the Plaspy platform using the shared Plaspy server port.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration.
- Server IP 54.85.159.138 can be used where an IP is required.
- Port 8888 is the Plaspy listening port for all supported devices.
- The device may be configured to use UDP or TCP on port 8888 depending on tracker options.
- Plaspy automatically detects the tracker protocol when the device connects and all devices in Plaspy use the same port.

## Typical Requirements Before Setup

- A powered and installed EV-100 unit that is reachable by SMS and has a valid SIM card with data enabled.
- Knowledge of the mobile operator APN, and optional APN username and password if your carrier requires them.
- Access to the device installer or manufacturer configuration method such as SMS commands or the vendor software.
- Ability to receive and send SMS from the SIM used in the tracker to apply SMS configuration commands.
- Confirmation from the vendor or manufacturer if the device requires enabling server-change functionality before setting a custom server.

## How This Tracker Connects to Plaspy

When configured, the EV-100 sends location and alarm reports to the shared Plaspy server endpoint on the platform port so Plaspy can display device location and events.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or 54.85.159.138.
- All data is sent to port 8888 which is the standard Plaspy port for supported devices.
- The device can use UDP or TCP transport depending on device settings and network conditions.
- Plaspy automatically detects the tracker protocol so explicit protocol configuration is often straightforward.
- Once reporting is active, location updates and alarm events appear in the Plaspy platform for monitoring and routing.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare SMS access to the device SIM.
2. Verify and set the device time zone and basic parameters so logs are time aligned with your needs.
3. Enter the Plaspy server address either as d.plaspy.com or as the IP address 54.85.159.138 depending on the device requirement.
4. Set port 8888 for reporting since Plaspy uses the same port for all devices.
5. Choose UDP or TCP if the EV-100 configuration requires you to specify a transport protocol.
6. Apply or save the configuration on the device and restart the tracker if the device or vendor instructions require a reboot.
7. Validate that the EV-100 reports to Plaspy by checking device connectivity and incoming messages in the Plaspy platform.

Note: The EV-100 manufacturer may require enabling server change on the device before the server command can be accepted. Contact the vendor or consult device documentation if you cannot change the server directly.

## Example Configuration Commands

The EV-100 supports SMS-based configuration. The sample commands below use the device default password 123456. Replace the password if your device was configured with a different access code.

1. Set time zone to UTC+0
```
123456L+00
```

2. Set operator APN
- Minimum command with APN only:
```
123456S1,[apn]
```
- If your carrier requires APN username and password, include them as placeholders:
```
123456S1,[apn],[apnu],[apnp]
```
Explanation of placeholders:
- [apn] = your mobile operator APN string
- [apnu] = APN username if required by carrier
- [apnp] = APN password if required by carrier

3. Set server address and port
- The manufacturer notes that server-change may need to be enabled by them first. Once enabled, use:
```
123456I1,54.85.159.138,8888
```
- You can substitute d.plaspy.com where the device supports domain names instead of an IP address:
```
123456I1,d.plaspy.com,8888
```

Keep this command order when applying initial setup: timezone, APN, then server settings. If the manufacturer requires an enablement step before changing the server, contact them to activate server configuration on the device.

## Configuration Notes

- Firmware and hardware revisions may change SMS command syntax or available options; always check the manufacturer documentation for your firmware build.
- The EV-100 example uses SMS commands for configuration. If you prefer software tools from the vendor, follow those tools and confirm they submit the same server and APN values.
- Choose UDP or TCP according to network reliability and your vendor instructions; Plaspy accepts both on port 8888 and will auto detect the protocol.
- The manufacturer may require enabling the option to change the server before accepting server-change commands. Contact the vendor if a server set command is rejected.
- Keep APN credentials secure and verify the SIM has sufficient data and SMS privileges for both configuration and reporting.

## Why Use Plaspy with This Configuration

Using the EV-100 configured to report to Plaspy gives organizations centralized visibility of vehicle and motorcycle fleets through a single shared server endpoint. With the EV-100 reporting to Plaspy on port 8888, operators get consistent behavior across many device models because Plaspy uses the same port and automatic protocol detection for incoming connections.

To learn more about Plaspy and how it supports trackers like the EV-100 visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and vendor tools consult the official manufacturer website http://www.eviewltd.com/ since manufacturer specifications and setup methods can change over time.
