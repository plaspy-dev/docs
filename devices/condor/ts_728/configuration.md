---
slug: /condor/ts_728/configuration
id: ts_728-configuration
sidebar_label: Configuration
title: Condor - TS-728 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Condor TS-728 for use with Plaspy including server settings and SMS configuration examples
keywords:
  - Condor TS-728 configuration
  - TS-728 Plaspy setup
  - Condor TS-728 server configuration
  - Condor maritime tracker setup
  - TS-728 SMS configuration
  - Condor satellite tracker Plaspy
  - TS-728 Iridium configuration
  - Condor tracker setup guide
  - TS-728 fleet tracking setup
  - Plaspy satellite tracker integration
---

# Condor - TS-728 Configuration

This page documents the public configuration context for using the Condor TS-728 tracker with Plaspy. It explains the shared Plaspy server settings you will use, summarizes typical prerequisites, and includes example SMS configuration commands supplied with the device model configuration. Use this guide to prepare the TS-728 for reporting to Plaspy and to validate connectivity from installation to platform visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The TS-728 description identifies the device as a maritime tracker with Iridium satellite connectivity; the public configuration commands below are an SMS based example that includes APN and GPRS style entries. Confirm the best configuration method for your firmware and satellite subscription with the manufacturer before deployment.

## Configuration Overview

The objective of configuration is to make the TS-728 report reliably to Plaspy so vessel position and telemetry appear in the platform in real time. The public SMS commands included with the model are a common method to apply server and network settings when an SMS interface is provided by the vendor.

- Configure the tracker to point at the Plaspy server so GPS and telemetry packets flow to the platform.
- Apply network parameters such as APN, transport mode, and any identifiers required by the device.
- Validate connectivity from the tracker to the server and confirm the device appears in Plaspy.
- Enable regular position updates and reporting intervals appropriate for maritime monitoring.
- Use the supplied verification command to check live connection status after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device configuration
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Known device IMEI and access to the device SMS or manufacturer configuration channel
- Active satellite service or cellular subscription as appropriate for your TS-728 installation
- Power applied and device mounted per installation guidance so it can obtain positioning and start reporting
- APN credentials if the device is configured to use GPRS style settings or a hybrid setup
- Access to the vendor documentation or configuration tool for device-specific options and firmware notes
- Ability to send SMS commands from a phone or management tool if SMS configuration is required

## How This Tracker Connects to Plaspy

The TS-728 is configured to send location and telemetry to the shared Plaspy server endpoint and port so shore operators see vessel data in Plaspy. Depending on installation and firmware, the tracker may use SMS to receive configuration and then use its satellite or GPRS link to forward telemetry to Plaspy.

- The tracker reports to the Plaspy server endpoint using the configured host and port.
- Plaspy receives packets on port 8888 and automatically detects the tracker protocol for parsing.
- Regular position and telemetry messages are sent at the configured update interval to provide continuous visibility.
- Event messages and alarms sent by the device are forwarded to Plaspy for alerting and logging.
- Platform visibility enables monitoring, geofence checks, and integration into fleet workflows.

## Common Configuration Workflow

1. Access the official Condor configuration method or software as documented by the vendor, or use the device SMS interface if supported.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device requires a transport selection for the server entry.
5. Apply or save the configuration on the device and, if applicable, send any required confirmation SMS commands.
6. Restart the device if the manufacturer recommends a reboot to apply network settings.
7. Validate that the device reports to Plaspy and appears on your account with expected position updates.

## Example Configuration Commands

The following example commands are provided by the model configuration as SMS messages. The device default password in these examples is 0000. Replace placeholders and the IMEI-based alias as needed for your IMEI and APN values. Send these as plain SMS messages to the tracker in the order shown when using the SMS configuration method.

1. Set the operator APN
```
APN,0000,{{apn}}
```
If your operator requires an APN username or password, include the optional placeholders:
```
APN,0000,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} is the operator APN string
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required

2. Set a 5 digit identifier (use the last 5 digits of the IMEI)
```
ALIAS,0000,XXXXX#
```
- Replace XXXXX with the last five digits of the device IMEI. For example, if IMEI ends in 12345 use ALIAS,0000,12345#

3. Set the timezone to UTC 0
```
GMT,0000,-0#
```

4. Set the GPRS or reporting server to Plaspy
```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
- This example explicitly sets the server IP 54.85.159.138 and port 8888 and shows transport and mode flags as used in the device commands
- Alternatively, if the device accepts a domain, use d.plaspy.com in place of the IP

5. Set the update interval to 1 minute (example)
```
INTERVALO,0000,M,6#
```
- Interpret interval values according to manufacturer documentation; this example is the public sample provided

6. Enable GPRS mode
```
GPRS,0000,A#
```

7. Verify connection settings (check command)
```
CONEXION,0000#
```
- This verification command requests the device to report the current connection status

Notes about commands
- The default device password in the provided examples is 0000. Change this password via manufacturer instructions after successful configuration if possible.
- Preserve the order of server and network commands when the manufacturer recommends a specific setup sequence.
- If your installation uses satellite-only transport, confirm whether the device requires different command formats or server entries for Iridium vs GPRS.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and supported parameters; always confirm commands against the manufacturer documentation for your device version.
- The example commands are SMS based and reflect the public configuration content supplied; manufacturer tools may offer an alternative GUI or cable based configuration method.
- Choose UDP or TCP based on device support and network requirements; Plaspy accepts either transport and automatically detects protocol.
- Change default passwords when possible to secure device configuration access; the example uses 0000 as the default password.
- Use the CONEXION,0000# verification command after applying settings to confirm the device reports to the Plaspy endpoint.

## Why Use Plaspy with This Configuration

Using the Condor TS-728 with Plaspy gives fleet operators a single platform to consolidate maritime assets, receive continuous location updates, and trigger alerts across vessels operating beyond terrestrial networks. Plaspy's shared server endpoint and automatic protocol detection simplify integration so devices configured to point at d.plaspy.com or 54.85.159.138 on port 8888 will be processed by the platform for mapping, reports, and alarms.

To learn more about Plaspy and how it supports satellite and mixed connectivity deployments visit https://www.plaspy.com. For the most current device specific instructions, firmware details, and official command reference consult the manufacturer at https://condorskyseeker.com/ to confirm exact setup methods and behavior.
