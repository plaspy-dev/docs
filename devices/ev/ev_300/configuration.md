---
slug: /ev/ev_300/configuration
id: ev_300-configuration
sidebar_label: Configuration
title: EV - EV-300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the EV EV-300 tracker to connect with Plaspy using shared server settings and SMS setup tips
keywords:
  - EV EV-300 configuration
  - EV EV-300 setup
  - EV EV-300 server configuration
  - EV GPS tracker setup
  - EV tracking configuration
  - EV-300 SMS configuration
  - Plaspy tracker configuration
  - Plaspy device setup
  - vehicle tracker configuration
  - motorcycle GPS setup
---

# EV - EV-300 Configuration

This page covers the public configuration context for using the EV EV-300 vehicle and motorcycle tracker with Plaspy. It gathers the practical, public-facing settings you will use to point an EV-300 at the Plaspy platform and explains the common SMS commands documented by the manufacturer for initial setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on receipt of data. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The EV-300 supports SMS configuration as shown in the public commands below, and some server-change options may require manufacturer activation.

## Configuration Overview

This guide explains the purpose and practical steps for preparing an EV-300 to communicate reliably with Plaspy. It focuses on the minimal, public configuration actions needed to set network APN values, timezone, and the Plaspy server endpoint so the device can report to the platform.

- Prepare the device so it can send outbound data to Plaspy using the shared server endpoint and port.
- Configure the operator APN and optional credentials so the tracker has mobile connectivity.
- Apply the Plaspy server address and port so reported messages reach Plaspy for automatic protocol detection.
- Validate device connectivity and confirm the tracker appears in the Plaspy platform.
- Use the EV-300 SMS commands for initial setup where available, and contact the manufacturer when server change options are restricted.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

These values are the public Plaspy settings to use when configuring the EV-300 to report to the platform. Plaspy uses the same port for all supported devices and will detect the device protocol automatically.

## Typical Requirements Before Setup

- A powered EV-300 device with working battery or connected vehicle power.
- A valid SIM card installed and active data or SMS service enabled if using SMS-based setup.
- Access to the official manufacturer configuration method or documentation for the EV-300.
- The default device password if required to send SMS commands; the EV-300 public commands use 123456 as the default password.
- A phone capable of sending SMS to the device or the manufacturer's configuration tool when applicable.
- Confirmation that the manufacturer or vendor has enabled server change options if required by the device firmware.

## How This Tracker Connects to Plaspy

The EV-300 is configured to send location and device messages to the Plaspy server endpoint and port so that Plaspy can ingest and parse reported data for real time tracking and events. Plaspy will identify the tracker protocol automatically when the device sends data to the shared endpoint.

- The tracker is set to report to the Plaspy server endpoint at d.plaspy.com or the IP 54.85.159.138.
- All Plaspy devices report on port 8888 so port configuration is consistent.
- The device uses the selected transport of UDP or TCP to send messages to Plaspy on port 8888.
- Plaspy performs automatic protocol detection to interpret the tracker messages without requiring per-device protocol selection.
- After configuration, reports and events from the EV-300 are visible in Plaspy once the device successfully connects and authenticates.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the EV-300, or prepare to send SMS commands from the device owner phone.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 depending on the device command method and manufacturer guidance.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires you to select a transport for reporting.
5. Apply or save the configuration on the tracker and, if SMS is used, send the required SMS commands from the registered phone number.
6. Restart the device if the manufacturer recommends a reboot after configuration.
7. Validate that the device reports to Plaspy by checking that it appears online in the Plaspy platform and that position messages are received.

If the EV-300 firmware restricts server changes, contact the manufacturer to enable the option before setting the server address.

## Example Configuration Commands

The EV-300 public configuration includes SMS commands documented by the manufacturer. The sample setup below uses the default device password 123456. Send these commands as SMS from the authorized phone number for the device. Preserve the placeholders when required.

1. Set the time zone to UTC 0
Send this SMS to the device:
```
123456L+00
```

2. Set the operator APN
Replace [apn] with your mobile operator APN. If your operator requires a username or password include [apnu] and [apnp] respectively. Examples:
```
123456S1,[apn]
```
or with credentials
```
123456S1,[apn],[apnu],[apnp]
```
Note: Keep the placeholders as they are and substitute the actual APN values from your SIM provider.

3. Enable the server change option
According to the public notes, you may need to contact the manufacturer to enable the option to change the server before sending the server command.

4. Set the Plaspy server IP and port
After server change is enabled, send the following SMS to point the tracker to Plaspy using the public IP and port:
```
123456I1,54.85.159.138,8888
```
Note: The example above uses the Plaspy server IP. If the EV-300 supports domain names for server configuration and the manufacturer has enabled it, you can use d.plaspy.com instead of the IP only if documented by EV.

Always verify that each SMS is accepted by the device and that the device responds or appears online after configuration.

## Configuration Notes

- Manufacturer firmware versions and feature flags can affect which SMS commands and server options are available. Check manufacturer documentation for changes.
- The EV-300 supports SMS based configuration as shown. If the device does not accept server changes by SMS, contact the vendor to enable the server change feature.
- Choose UDP or TCP based on installation guidance and any network constraints. Plaspy accepts both on port 8888.
- Plaspy uses the same port across supported trackers and automatically detects the device protocol so you do not need to preselect a protocol in Plaspy.
- If you use APN placeholders include the correct APN, username, and password for the SIM card in the device.

## Why Use Plaspy with This Configuration

Configuring the EV-300 to report to Plaspy provides a straightforward path to real time vehicle and motorcycle visibility using a single shared server endpoint and port. Organizations that need monitoring and operational oversight can benefit from consistent server settings, automatic protocol detection, and centralized visibility in Plaspy once devices are correctly configured and connected.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest manufacturer specific configuration methods, firmware behavior, and device details verify information on the official EV website http://www.eviewltd.com/ as manufacturer procedures can change over time.
