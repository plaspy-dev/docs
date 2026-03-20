---
slug: /coban/bn_201/configuration
id: bn_201-configuration
sidebar_label: Configuration
title: Coban - BN-201 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Coban BN-201 GPS tracker with Plaspy server settings SMS commands and integration steps
keywords:
  - Coban BN-201 configuration
  - BN-201 setup
  - Coban BN-201 Plaspy
  - pet tracker configuration
  - GPS tracker setup
  - server configuration for GPS tracker
  - SMS configuration commands
  - BN 201 GPS platform setup
  - Coban tracker server settings
  - Plaspy device integration
---

# Coban - BN-201 Configuration

This page documents the public configuration context for using the Coban BN-201 pet tracker with Plaspy. It summarizes the practical server settings and the SMS command workflow commonly used to prepare BN-201 devices for reporting to Plaspy. Use this page to understand the steps required before integrating a BN-201 with Plaspy and to reference the public SMS commands included in manufacturer guidance.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices report. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so consider the commands and examples here as practical public guidance while confirming device-specific behavior with official Coban documentation.

## Configuration Overview

This configuration process prepares the BN-201 to send position and status packets to Plaspy so the device becomes visible in the Plaspy platform. The BN-201 supports SMS configuration and IP reporting over standard TCP or UDP channels, and the commands below show how to point the device at Plaspy and verify connectivity.

- Configure the BN-201 to report to the Plaspy server so location and events appear in the platform.
- Set APN and GPRS parameters so the device can use 2G or NB-IoT connectivity for IP reporting.
- Use SMS or manufacturer configuration tools to apply settings when a companion app or USB tool is not available.
- Verify reporting and use the BN-201 check command to confirm device settings and connectivity.
- Enable optional protocol or sensor reporting settings if supported by your firmware and deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices report

## Typical Requirements Before Setup

- A charged BN-201 device with a working battery and installed SIM if using IP reporting over cellular
- An active SIM with data access and SMS capability where SMS configuration is required
- Access to a phone or SMS gateway capable of sending configuration SMS messages to the device
- The official Coban user guide or configuration reference for the BN-201 to confirm firmware specific commands
- A Plaspy account or provisioning workflow to add and monitor the device once it reports

## How This Tracker Connects to Plaspy

The BN-201 sends periodic or event-based messages over TCP or UDP to the shared Plaspy endpoint or can be configured via SMS for remote management. When addressed to the Plaspy server and correct port, Plaspy ingests and decodes GNSS coordinates and device status so you can view live location, history, and alerts.

- The tracker is configured to report to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 and port 8888
- Data can be transmitted over UDP or TCP depending on network and device selection
- Plaspy automatically detects the tracker protocol so the same Plaspy port works for all supported devices
- Event reporting such as geofence exits, movement, or SOS is forwarded to Plaspy for notifications and history
- SMS can be used for configuration, fall back reporting, or when IP connectivity is not available

## Common Configuration Workflow

1. Access the official Coban configuration method for the BN-201 such as SMS commands or a vendor tool and confirm the device password (default shown below).
2. Enter the Plaspy server address by using either d.plaspy.com or the IP 54.85.159.138 in the device server configuration.
3. Set the port to 8888 for Plaspy reporting.
4. Choose UDP or TCP for transport if the device requires explicit transport selection.
5. Apply or save the configuration and, if required, restart or power cycle the device.
6. Validate that the device reports to Plaspy by using the BN-201 check command and confirming the device appears in your Plaspy account.
7. If needed, adjust APN, update intervals, or protocol settings and revalidate reporting.

## Example Configuration Commands

The BN-201 can be configured by sending SMS commands to the device. The default device password used in these examples is 123456. Preserve placeholders when replacing network operator credentials.

1. Optional factory reset (initial setup or when required)
```
begin123456
```

2. Set the time zone to UTC 0
```
time zone123456 0
```

3. Set the operator APN (replace [apn] with your operator APN)
```
apn123456 [apn]
```
- [apn] placeholder stands for the APN string provided by your cellular operator.

4. Set the APN username and password if required by the operator
```
up123456 [apnu] [apnp]
```
- [apnu] is the APN username placeholder
- [apnp] is the APN password placeholder

5. Set the GPRS server to Plaspy using the Plaspy public IP and port
```
adminip123456 54.85.159.138 8888
```
- This points the device to the Plaspy server. You can alternatively use d.plaspy.com where DNS is supported.

6. Set the location update interval example
```
fix060s060s***n123456
```
- This command form is an example interval format provided by the device guidance. Confirm exact interval codes with the manufacturer manual.

7. Switch to GPRS mode and select transport for reporting
```
gprs123456,1,1
```
- Example selects GPRS and transport mode. Some firmware accepts a simpler command:
```
gprs123456
```

8. Check current settings on the device
```
check123456
```

9. Enable extended protocol or sensor reporting for fuel or digital sensors
```
protocol123456 18
```
- Use this command to enable additional reporting mode where applicable.

Note on placeholders and passwords
- Keep the default password 123456 in the examples above unless the device password has been changed. If your device uses a different password, replace 123456 with the active device password in each command.
- Replace [apn], [apnu], and [apnp] with the operator APN, APN username, and APN password respectively.

## Configuration Notes

- SMS based configuration is supported and commonly used for initial setup when a companion app or USB tool is not available.
- Firmware revisions and hardware variants can change exact command syntax or available options; always check the Coban BN-201 manual for your firmware revision.
- When choosing between TCP and UDP, consider network reliability and packet acknowledgment behavior; Plaspy accepts either and automatically detects the tracker protocol.
- Plaspy uses the same port for all supported devices and will detect the protocol automatically when the device reports to d.plaspy.com or 54.85.159.138 on port 8888.
- If a configuration does not take effect, a restart or power cycle of the BN-201 can help apply new settings.

## Why Use Plaspy with This Configuration

Using the Coban BN-201 with Plaspy gives pet owners and operators a straightforward path to real time location, history playback, and configurable alerts. The BN-201's support for TCP, UDP, and SMS reporting aligns with Plaspy's ingestion capabilities, making it practical to deploy the tracker for geofence alerts, live monitoring, and low power NB-IoT uplinks where available.

Learn more about Plaspy and how it supports device integrations on https://www.plaspy.com. For the most current device specific configuration commands firmware notes and installation instructions verify details on the manufacturer site at https://www.coban.net/ as manufacturer specifications and setup methods can change over time.
