---
slug: /coban/bn_311c/configuration
id: bn_311c-configuration
sidebar_label: Configuration
title: Coban - BN-311C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Coban BN-311C GPS tracker showing Plaspy server settings and SMS setup commands
keywords:
  - Coban BN-311C configuration
  - Coban BN-311C setup
  - BN-311C Plaspy
  - Plaspy tracker configuration
  - GPS tracker configuration
  - Coban tracker setup
  - BN-311C server settings
  - Plaspy server setup
  - GSM GPRS tracker configuration
  - SMS configuration commands
---

# Coban - BN-311C Configuration

This page documents the public configuration context for using the Coban BN-311C with Plaspy. It collects the practical server settings and SMS setup commands that are commonly used to point a BN-311C to the Plaspy tracking service and to validate basic connectivity and reporting after installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side steps for configuring a BN-311C can vary by firmware revision, hardware revision, installation type, and the vendor tools you use, so this guide focuses on the public values and SMS commands known for initial setup while recommending you verify any device-specific differences with the manufacturer.

## Configuration Overview

The goal of the configuration process is to prepare the BN-311C to communicate reliably with the Plaspy platform and to validate that position and alarm reports are received. The commands and settings here are the public SMS commands commonly used for initial provisioning, APN and server setup, and a basic reporting cadence.

- Configure APN and GPRS parameters so the device can exchange data with Plaspy.
- Point the device to the Plaspy server endpoint using the public server address or IP and the shared port used by Plaspy.
- Select the transport mode (UDP or TCP) if required by the device and operator.
- Validate reporting and use the verification command to confirm settings are active.
- Optionally enable protocol enhancements such as extended sensor reporting if supported by firmware.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same server endpoint and port work for supported devices
- Note: Plaspy uses the same port for all supported devices to simplify device provisioning

## Typical Requirements Before Setup

- A powered BN-311C unit with access to its wiring harness and any required installer accessories.
- An active SIM card with a data plan and correct APN credentials for the mobile operator.
- Ability to send and receive SMS messages to the device for SMS-based configuration (the BN-311C supports SMS setup).
- The default device password (used in the example commands) if you have not changed it from factory values.
- Basic knowledge of the APN, APN username, and APN password provided by your mobile operator.
- Access to manufacturer documentation or installer tool for firmware specific notes and advanced options.

## How This Tracker Connects to Plaspy

The BN-311C sends GNSS position reports, alarms, and status messages over GSM/GPRS to Plaspy. When configured to report to Plaspy using the public server settings, the platform receives these messages and displays them as live locations, events, and telemetry.

- The device is pointed to the Plaspy endpoint (d.plaspy.com or 54.85.159.138) and port 8888 for reporting.
- Transport can be UDP or TCP depending on installer preference or firmware capability; both are supported on port 8888.
- Plaspy automatically detects the tracker protocol and decodes messages so the device appears correctly in the platform.
- Alarms and remote-control events (for example immobilizer actions on the C-type model) are delivered to Plaspy as actionable events.
- Use the verification SMS command to confirm the device is reporting to the Plaspy endpoint.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the BN-311C (SMS commands as shown below or an approved vendor tool).
2. Set the APN and APN credentials for the mobile operator so GPRS can function.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 into the device server settings.
4. Set the server port to 8888 and note that Plaspy uses the same port across supported devices.
5. Choose UDP or TCP transport if the device firmware requires an explicit transport selection.
6. Apply or save the configuration and restart the tracker if required by the device.
7. Validate that the device reports to Plaspy by using the verification command and confirming visibility in the Plaspy platform.

## Example Configuration Commands

The BN-311C supports SMS-based configuration. The commands below are the public SMS commands commonly used for initial setup. The device default password used in these examples is 123456. Keep placeholders as shown and replace them with your operator credentials where required.

- Optional initial factory reset (use only when required)
```text
begin123456
```

- Set the time zone to UTC+0
```text
time zone123456 0
```

- Set the APN for your mobile operator
```text
apn123456 {{apn}}
```
Replace {{apn}} with your operator APN string.

- Set the APN username and password
```text
up123456 {{apnu}} {{apnp}}
```
Replace {{apnu}} and {{apnp}} with the APN username and password if your operator requires them. If not required, leave the placeholders empty as appropriate.

- Set the GPRS server using the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
This command points the tracker to the Plaspy server IP and the shared port 8888. You may also use the domain d.plaspy.com in supported firmware or tools where domain names are accepted.

- Set a typical position update interval (example format used by this firmware)
```text
fix060s060s***n123456
```
This command is an example of setting periodic fixes. Keep the factory password in the command. Exact interval formats can vary by firmware.

- Switch to GPRS reporting mode (two forms shown; use the form supported by your firmware)
```text
gprs123456,1,1
```
or
```text
gprs123456
```
One form enables GPRS mode with parameters, the other is a simpler enable command. Use the variant your device firmware supports.

- Verify current configuration
```text
check123456
```
This command requests a status report from the device to confirm settings.

- Enable extended protocol mode to improve reporting for fuel or digital sensor status
```text
protocol123456 18
```
This command sets protocol mode 18 which can enable enhanced reporting of certain sensor states on supported firmware.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS command syntax and available parameters; always verify the command formats with the manufacturer documentation for your unit.
- SMS setup is a common and practical method for BN-311C provisioning, but some installers prefer vendor tools or over the air provisioning where available.
- Choose UDP or TCP based on your operational needs; UDP is often lighter weight while TCP can be more reliable for ordered delivery depending on network conditions and firmware behavior.
- Keep the device password secure and change it from the factory default when appropriate for security and administrative control.
- The adminip command above uses the Plaspy IP and port; you can also enter d.plaspy.com where the tracker supports DNS names.

## Why Use Plaspy with This Configuration

Using the BN-311C with Plaspy gives small vehicle and motorcycle operators a straightforward path to live location, event alerting, and basic fleet monitoring while leveraging the platform’s automatic protocol detection and shared server endpoint approach. The compact BN-311C reports GNSS positions and alarms to Plaspy so you can monitor routes, receive real-time alerts, and execute remote-control workflows such as immobilization when needed.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and official commands for the BN-311C consult the manufacturer website at https://www.coban.net/ as device behavior and configuration methods can change over time.
