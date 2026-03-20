---
slug: /wanway/gs10g/configuration
id: gs10g-configuration
sidebar_label: Configuration
title: WanWay - GS10G Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for WanWay GS10G GPS tracker integration with Plaspy using shared server settings and SMS commands
keywords:
  - WanWay GS10G configuration
  - WanWay GS10G setup for Plaspy
  - GS10G SMS configuration
  - WanWay GPS tracker configuration
  - GS10G server configuration
  - GS10G APN setup
  - Plaspy compatible tracker
  - vehicle GPS tracker setup
  - fleet tracker configuration
  - GS10G GPRS configuration
---

# WanWay - GS10G Configuration

This page documents the public configuration context for using the WanWay GS10G tracker with Plaspy. It summarizes the shared Plaspy server settings you must apply to the device and provides example SMS commands and workflow guidance derived from the device's public configuration content. Use this guide to prepare the GS10G for connectivity to Plaspy and to validate basic reporting after setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GS10G supports SMS and GPRS style configuration commands in its public documentation, and this page shows how to apply those commands with the Plaspy server settings in mind.

## Configuration Overview

This configuration process prepares the GS10G to communicate with Plaspy by setting the device APN and server endpoint, enabling GPRS reporting, and verifying the device reports correctly. The goal is to make the tracker visible in Plaspy so real time location and event data reach the platform reliably.

- Set the carrier APN so the GS10G can use mobile data for reporting.
- Point the device to the Plaspy server endpoint and the shared port used by Plaspy.
- Configure reporting intervals and switch the tracker into GPRS mode for data transmission.
- Use verification commands to confirm parameters and device status after configuration.
- Validate the device is visible and sending updates to Plaspy for monitoring and alerts.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public Plaspy settings to use when configuring the GS10G. Plaspy uses the same port for all supported devices and will detect the correct protocol automatically.

## Typical Requirements Before Setup

- A valid SIM card with a mobile data plan and SMS capability installed in the device.
- Carrier APN information from your mobile operator to enable GPRS data connection.
- Physical power to the device or vehicle power connection so the tracker can boot and accept SMS commands.
- Access to the GS10G manufacturer configuration method such as SMS commands or vendor software.
- A Plaspy account and knowledge of how to confirm a device is reporting in the Plaspy platform.
- Ability to receive SMS responses from the device to confirm configuration and status.

## How This Tracker Connects to Plaspy

The GS10G is configured to send location and event data to the shared Plaspy server endpoint and port either over UDP or TCP. When properly set up with the carrier APN and server parameters, the tracker will initiate a GPRS connection and deliver telemetry to Plaspy for processing and visualization.

- The tracker uses GPRS/4G data to connect to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be selected as UDP or TCP depending on device settings; Plaspy accepts either and auto detects protocol.
- The device reports at configured intervals so Plaspy can provide live location and event updates.
- Event alarms and status messages are forwarded to Plaspy for alerting and historical reporting.
- Verification commands can be used to check parameters and confirm the device is actively reporting to Plaspy.

## Common Configuration Workflow

1. Access the official WanWay GS10G configuration method such as the SMS command interface or vendor configuration tool supplied by WanWay.
2. Enter the Plaspy server domain d.plaspy.com or, if needed, the server IP 54.85.159.138 into the server or GPRS settings.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP transport if the GS10G requires a transport selection.
5. Configure the carrier APN using the APN command and set the desired reporting interval.
6. Apply or save the configuration and restart the device if required by the device or vendor instructions.
7. Validate that the GS10G reports to Plaspy by using device verification commands and confirming visibility in your Plaspy account.

## Example Configuration Commands

The GS10G public configuration uses SMS commands. Preserve placeholders such as [apn], [apnu], and [apnp] when you replace them with your carrier values.

1. Configure your carrier APN
   - Use this SMS to set the APN. Replace [apn] with your carrier APN. If your carrier requires a username and password include [apnu] and [apnp].
```text
APN,[apn]
```
   - If the device uses the extended APN format with username and password:
```text
APN,[apn],[apnu],[apnp]#
```
   - Explanation: [apn] is your carrier APN name. [apnu] and [apnp] are optional APN username and password placeholders.

2. Setup the GPRS server pointing to Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```
   - Explanation: This sets server slot 1 to domain d.plaspy.com and port 8888. The final parameter in the device command sequence may indicate protocol or reserved value per the device manual; Plaspy accepts UDP or TCP and performs automatic protocol detection.

3. Set the update interval (example 60 seconds)
```text
TIMER,60,60#
```
   - Explanation: Configures reporting timers. Adjust values as required by your installation and the GS10G manual.

4. Switch to GPRS mode
```text
GPRSON,1#
```
   - Explanation: Enables GPRS reporting mode so the device will send data to the configured server.

5. Check the current configuration
```text
PARAM#
```

6. Check device status
```text
STATUS#
```

Notes on using these commands
- Send each command as an SMS from the authorized phone number or using the vendor tool as required by WanWay documentation.
- Keep the order above for initial setup: APN first, server settings next, timers, then enable GPRS.
- Replace placeholders with actual carrier values before sending.

## Configuration Notes

- The GS10G public commands show SMS based setup; vendor tools or configuration software may also be available and can streamline batch or bulk deployments.
- APN placeholders [apn], [apnu], and [apnp] must be filled with your carrier values. If unsure, check with the mobile operator.
- Choose UDP or TCP transport in the device if required; Plaspy accepts both and will automatically detect the device protocol once traffic reaches the server.
- Plaspy uses the same port 8888 for all supported devices so that port does not change across device integrations.
- Firmware versions and hardware revisions can change available command syntax and behavior. Always verify commands against the current WanWay documentation.

## Why Use Plaspy with This Configuration

Using the GS10G with Plaspy provides a practical way to collect real time location, event alerts, and operational telemetry across fleets. With the device pointed at Plaspy's shared server endpoint and a correct APN configuration, organizations can centralize tracking data, receive alarm notifications, and use reporting tools to support maintenance, safety, and asset protection workflows.

To learn more about Plaspy and how the platform can manage devices like the WanWay GS10G, visit https://www.plaspy.com. For the latest device specific configuration methods, command syntax, and firmware details, verify current information on the manufacturer website https://www.wanwaytech.net/ as device behavior and setup steps may change over time.
