---
slug: /queclink/gl520mg/configuration
id: gl520mg-configuration
sidebar_label: Configuration
title: QuecLink - GL520MG Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the QuecLink GL520MG tracker to Plaspy using shared server settings and SMS commands
keywords:
  - QuecLink GL520MG
  - QuecLink GL520MG configuration
  - QuecLink GL520MG setup
  - GL520MG Plaspy integration
  - Plaspy tracker configuration
  - GL520MG server configuration
  - QuecLink GPS tracker setup
  - GL520MG SMS configuration
  - asset tracking configuration
  - GPS platform setup
---

# QuecLink - GL520MG Configuration

This page describes the public configuration context for using the QuecLink GL520MG tracker with the Plaspy platform. It collects the practical, publicly available settings and example SMS commands used to point the GL520MG at Plaspy so the device can report location and telemetry into the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer-side setup steps can vary by firmware revision, hardware version, installation type, and the tools a vendor provides. The example SMS commands below are taken from public device configuration guidance and illustrate a common setup flow for this model.

## Configuration Overview

The goal of this configuration is to prepare a GL520MG to communicate reliably with Plaspy so location, sensor telemetry, and events are visible in the platform. Configuration typically includes setting the cellular APN, pointing the device at Plaspy’s server endpoint, selecting a transport type, and enabling the report interval and event inputs required by your monitoring profile.

- Set the device APN and credentials so the tracker has GPRS/LPWAN connectivity for TCP/UDP reporting.
- Point the tracker to the Plaspy server endpoint so messages arrive at Plaspy for parsing and display.
- Choose UDP or TCP transport based on network needs and device support; Plaspy supports both.
- Configure a reporting interval and enable inputs such as SOS or motion notifications to surface events in Plaspy.
- Validate connectivity by confirming the device registers and sends messages to the Plaspy server.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport: UDP or TCP are both supported by the device and accepted by Plaspy  
- Plaspy automatically detects the tracker protocol when messages arrive

## Typical Requirements Before Setup

- A GL520MG device with battery or external power and accessible status LEDs to confirm operation.  
- A cellular SIM active for data and SMS if using SMS-based configuration or GPRS reporting; know the APN, APN user, and APN password for your mobile operator.  
- Access to the official QuecLink configuration method you prefer (SMS commands, dealer tool, or management software) as provided by the installer or vendor.  
- The device password for remote commands; the publicly referenced default password used in the example commands is queclink.  
- Network coverage where the device will operate and the operator supports the radios used by the GL520MG.  
- Confirmation of firmware version and vendor notes, since exact command syntax and behavior may vary across firmware releases.

## How This Tracker Connects to Plaspy

When configured, the GL520MG sends position fixes and telemetry to the shared Plaspy endpoint and port so Plaspy can ingest, normalize, and display device data. The device may use TCP or UDP to transmit reports; Plaspy will accept messages on the same port for all devices and determine the correct protocol parser automatically.

- The tracker is configured to report to d.plaspy.com (or 54.85.159.138) on port 8888.  
- Data transport may be TCP or UDP depending on your configuration choice and network reliability needs.  
- Location, temperature, motion, and event inputs are sent to Plaspy where they appear in device dashboards and alerts.  
- The platform provides visibility into device health and message activity after the device begins reporting.  
- Plaspy normalizes QuecLink-formatted messages so telemetry from this device integrates with other fleet and asset data.

## Common Configuration Workflow

1. Access the official QuecLink configuration method you will use (SMS commands, vendor tool, or management portal).  
2. Set the device APN and credentials so the tracker can use cellular data for reporting.  
3. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 and set the server port to 8888.  
4. Choose UDP or TCP transport if the device requires a transport selection.  
5. Apply or save the configuration and, if recommended, send any activation or test command.  
6. Restart or power cycle the device if required by the manufacturer to apply settings.  
7. Validate that the device reports to Plaspy by checking the device status in the platform or confirming inbound messages arrive at the Plaspy endpoint.

## Example Configuration Commands

The manufacturer-provided example uses SMS commands to configure the GL520MG. The sample commands below assume the device password is the default queclink. The order is important for initial setup; the first command restores factory settings and is optional for devices that are already in service.

1. Optional initial factory restore (use only if you need to reset device settings)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
- Restores factory settings. Marked optional and typically used only for initial setup or troubleshooting.

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
- Configures device time zone. Adjust values if you need a different offset.

3. Set the operator APN (replace placeholders with your operator values)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = operator access point name  
- {{apnu}} = APN username if required by the operator (leave empty if not used)  
- {{apnp}} = APN password if required by the operator (leave empty if not used)

4. Set the GPRS server and port to Plaspy (device supports specifying both domain and IP)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Points the device to Plaspy using the domain and the IP on port 8888. Plaspy accepts TCP or UDP on this port and automatically detects the protocol.

5. Set the periodic update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
- Configures reporting frequency values; adjust as needed to balance visibility and battery life.

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```
- Enables SOS event reporting for the specified input.

Note: Keep the command order when performing an initial setup. Replace APN placeholders with values provided by your mobile operator. The example commands are SMS-style AT commands used with QuecLink devices; some installers may prefer configuration via a vendor tool instead.

## Configuration Notes

- SMS-based configuration is shown above because it is a common public method for QuecLink devices; vendor tools or remote management systems may provide an alternate workflow.  
- Different firmware versions or hardware revisions can change command syntax or supported parameters; verify the exact command format for your device firmware.  
- Choose TCP or UDP based on network and reliability requirements; Plaspy supports both and will accept messages on the shared port 8888.  
- Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when messages arrive.  
- Preserve the device password and change it from the default if required by your security policy after initial provisioning.

## Why Use Plaspy with This Configuration

Using the GL520MG with Plaspy gives organizations an efficient way to collect long-life asset telemetry and GNSS location data into a single platform for monitoring, alerts, and reports. The device’s power-optimized reporting and environmental sensors map well to Plaspy workflows for cold-chain, static asset monitoring, and large scale low-maintenance deployments.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device-specific commands, firmware behavior, and official QuecLink documentation please verify details on the manufacturer website https://www.queclink.com/ as methods and syntax can change over time.
