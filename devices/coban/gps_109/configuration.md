---
slug: /coban/gps_109/configuration
id: gps_109-configuration
sidebar_label: Configuration
title: Coban - GPS-109 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Coban GPS-109 for use with Plaspy including server settings SMS commands and setup workflow
keywords:
  - Coban GPS-109 configuration
  - GPS 109 Plaspy setup
  - Coban GPS tracker configuration
  - GPS-109 server configuration
  - GPS tracker SMS setup
  - Plaspy device configuration
  - vehicle tracking setup
  - GPS-109 tracking software
  - Coban GPS-109 instructions
  - GPRS tracker configuration
---

# Coban - GPS-109 Configuration

This page covers the public configuration context for using the Coban GPS-109 tracker with the Plaspy platform. It explains the shared Plaspy server settings you must configure on the device, provides the practical SMS commands published for this model, and outlines the typical workflow to register and validate a device on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GPS-109 supports SMS and GPRS based setup methods, and the SMS command examples below are the publicly available commands commonly used for initial configuration.

## Configuration Overview

The configuration process prepares the GPS-109 to communicate with Plaspy and ensures the tracker reports location and event data reliably. Use the server values and transport options below to point the device to Plaspy, then validate connectivity and visibility in your Plaspy account.

- Configure the device to send GPRS data to Plaspy using the shared server endpoint and port.
- Set the APN and optional APN credentials so the tracker can connect to the mobile data network.
- Choose the transport mode UDP or TCP on the device if required, and ensure Plaspy port settings are applied.
- Verify the device is reporting by using the published verification command and by checking the device in Plaspy.
- Optionally perform an initial factory reset or timezone setup before finalizing configuration when appropriate.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and that automatic protocol detection removes the need to select a protocol on the platform side.

## Typical Requirements Before Setup

- A charged GPS-109 with access to the installer or the person who knows the device SMS password.
- A valid GSM SIM card with GPRS data enabled and SMS capability inserted in the tracker.
- Access to the device SMS interface or manufacturer configuration tool to send the commands described below.
- Knowledge of the device default password if it has not been changed (the published default used in examples below is 123456).
- A Plaspy account and the ability to view device activity in the Plaspy platform to validate reporting.

## How This Tracker Connects to Plaspy

The GPS-109 is configured to report its location and events to the shared Plaspy server endpoint and port. Once pointed at Plaspy and given correct APN and transport settings, the tracker will send GPRS packets that Plaspy receives and processes automatically.

- Device sends position and event messages to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on tracker configuration; Plaspy accepts both.
- Plaspy automatically detects the tracker protocol so no special protocol selection is required on the platform.
- Platform visibility is achieved after the device successfully connects and transmits to the shared server and port.
- Regular update intervals and event triggers determine how frequently the device reports to Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the GPS-109 such as SMS commands or the vendor software and confirm the current firmware behavior.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP on the device if your firmware requires selecting a transport method.
5. Configure the device APN and, if needed, APN username and password so GPRS can connect.
6. Apply or save the configuration and restart the device if the tracker requires a reboot to apply GPRS settings.
7. Validate that the device reports to Plaspy by sending a verification command and by checking device activity in your Plaspy account.

## Example Configuration Commands

The GPS-109 supports SMS based configuration. The commands below are presented in the order provided by the public manufacturer guidance. The device default password in these examples is 123456. Preserve and replace placeholders where indicated.

- Factory reset (optional initial setup)
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the operator APN
```text
apn123456 [apn]
```
Explanation: Replace [apn] with your mobile operator APN string.

- Set the APN username and password
```text
up123456 [apnu] [apnp]
```
Explanation: Replace [apnu] and [apnp] with the APN username and password if required by your operator. If no credentials are needed, use empty values as appropriate for your operator.

- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
Explanation: This points the tracker directly to Plaspy using the public server IP and port. You may alternatively enter d.plaspy.com depending on firmware support for DNS.

- Set the location update interval example
```text
fix060s060s***n123456
```
Explanation: This is one example update interval command as published for this model. Modify according to your desired reporting frequency and device syntax rules.

- Switch to GPRS mode and choose UDP or TCP
```text
gprs123456,1,1
```
or
```text
gprs123456
```
Explanation: Use the variant supported by your firmware to enable GPRS data mode. Consult manufacturer documentation for exact parameter meanings on specific firmware.

- Check current settings
```text
check123456
```

- Enable fuel sensor status or improved digital sensor reporting
```text
protocol123456 18
```

When sending SMS commands replace 123456 with the device password if it has been changed from the default. If your firmware supports using the domain name instead of IP, you can set the server to d.plaspy.com where appropriate.

## Configuration Notes

- Firmware and hardware revisions can change the exact syntax and available commands for SMS setup; always verify command behavior on a test device.
- The GPS-109 offers both SMS and GPRS based configuration paths; SMS commands are useful for remote setup where a computer is not available.
- Choose UDP or TCP on the tracker per installation needs; Plaspy accepts both and will auto detect the protocol the device uses.
- All devices in Plaspy use the same port 8888; this simplifies server configuration across models.
- If you change the device password from the default, keep a record of the new password to avoid locking yourself out of SMS configuration.

## Why Use Plaspy with This Configuration

Using the Coban GPS-109 with Plaspy gives organizations a straightforward way to centralize device visibility and monitor location and event activity on a single platform. Pointing the tracker at Plaspy and validating connectivity lets fleets and asset managers see device reports consistently while relying on Plaspy to detect the device protocol automatically.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific instructions firmware notes and manufacturer guidance verify details at the Coban website https://www.coban.net/ as methods and firmware behavior can change over time.
