---
slug: /meitrack/t366/configuration
id: t366-configuration
sidebar_label: Configuration
title: Meitrack - T366 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance to connect a Meitrack T366 tracker to Plaspy using shared server settings and SMS commands
keywords:
  - Meitrack T366 configuration
  - Meitrack T366 setup
  - Meitrack T366 server configuration
  - Meitrack T366 Plaspy
  - T366 GPS tracker setup
  - Meitrack tracker configuration
  - T366 tracking software configuration
  - Meitrack T366 GPS platform setup
  - T366 fleet tracking configuration
  - Meitrack Plaspy compatibility
---

# Meitrack - T366 Configuration

This page covers the public configuration context for using the Meitrack T366 tracker with Plaspy. It explains the shared Plaspy server settings you will point the device to, describes the common setup workflow, and includes example SMS configuration commands from the device vendor that are commonly used to prepare the T366 for platform connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor tools. The T366 typically supports SMS configuration and GPRS reporting and the public SMS commands shown below can be used as part of preparing the device for Plaspy.

## Configuration Overview

The goal of configuration is to prepare the T366 to communicate reliably with Plaspy so the device is visible in the platform and reports location and event telemetry at the expected intervals. Typical configuration focuses on setting the GPRS server endpoint, transport type, reporting interval, timezone, and event reporting so Plaspy receives usable telemetry and status.

- Point the device to the Plaspy server endpoint so data is directed to Plaspy for ingestion.
- Configure transport type and the shared platform port to match Plaspy requirements.
- Set a reporting interval and timezone so location updates appear correctly in Plaspy.
- Enable or configure event reporting and immobilizer state so alarms and control workflows are available in the platform.
- Validate connectivity and confirm the device is visible in Plaspy before finishing installation.

## Plaspy Server Settings

Use these public Plaspy settings when configuring the T366 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure UDP or TCP on port 8888 as required by the device
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public platform endpoints to use when entering server settings on the device or via SMS configuration commands.

## Typical Requirements Before Setup

- Device powered with reliable installation power and any required backup battery connected.
- Active SIM card with data service and SMS ability if using SMS or GPRS for configuration and reporting.
- Ability to send SMS to the tracker from an authorized cellphone number or access to the vendor configuration tool when available.
- Knowledge of the device password for configuration; the sample public commands below use the default password 0000.
- Access to the official Meitrack configuration method, firmware notes, or installation guide to confirm command syntax and supported options.
- External GNSS antenna and RS232 peripherals connected where required for telemetry sensors used in your deployment.

## How This Tracker Connects to Plaspy

The T366 sends GNSS fixes and telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest location, event, and sensor data for real time tracking and historical reporting. The device may use GSM GPRS connectivity to forward data and supports offline buffering and OTA updates to preserve continuity when connections are intermittent.

- The tracker reports GPS fixes and telemetry to d.plaspy.com or to the server IP 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP; Plaspy accepts either and will detect the protocol automatically.
- Event and alarm reporting (for example immobilizer or collision events) are sent to the platform for alerting and workflow automation.
- Offline buffer stores recent points if connectivity drops and the device forwards buffered records once the link is restored.
- Plaspy ingest enables visibility, reporting, and remote control workflows for telemetry and immobilizer outputs.

## Common Configuration Workflow

1. Access the official Meitrack configuration method or vendor documentation to confirm supported commands for your device firmware.
2. Prepare the device: power it on, ensure the SIM has data and SMS enabled, and confirm the device password (the sample commands below use default password 0000).
3. Enter the Plaspy server endpoint either as domain d.plaspy.com or IP 54.85.159.138 in the device configuration.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and perform any recommended restart or reboot procedure on the device.
6. Validate connectivity by confirming the device reports to Plaspy and appears in the platform dashboard or by checking server-side logs for inbound connections.

If you use SMS-based configuration, follow the manufacturer command order precisely and verify that placeholders such as APN values are replaced with your carrier credentials before sending.

## Example Configuration Commands

The following SMS commands are public examples typically used to configure a Meitrack T366. The sample setup uses the default device password 0000. Preserve the placeholder values when preparing your messages.

1. Optional initial factory reset or factory settings (use only when required)
```
0000,F11
```
2. Set the GPRS server to Plaspy using the server IP and port. Replace {{apn}}, {{apnu}}, and {{apnp}} with your SIM carrier APN and optional APN username and password:
```
0000,A21,2,54.85.159.138,8888,{{apn}}
```
If your SIM requires APN username and password provide them as additional comma separated fields:
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
- {{apn}} = carrier APN name
- {{apnu}} = APN username (optional)
- {{apnp}} = APN password (optional)

3. Set the time zone to UTC+0 (adjust value as needed for your local timezone)
```
0000,B36,0
```
4. Set the GPS update/reporting interval to every 1 minute
```
0000,A12,6,0
```
5. Configure event reporting (example enabling default events)
```
0000,C03,0
```

Send these SMS commands from an authorized phone number or using your vendor tool as documented by Meitrack. Keep the command order when performing initial setup; the factory settings command should be optional and used only when a reset is needed.

## Configuration Notes

- Firmware and hardware revisions can change supported command syntax and behavior. Confirm command formats with the device firmware release notes.
- SMS-based configuration is shown above and is commonly supported by Meitrack devices; vendor software or serial tools may also be available for bulk or advanced configuration.
- Choose UDP or TCP based on your installation and carrier behavior; Plaspy accepts both and will automatically detect the tracker protocol.
- Because Plaspy uses the same port for all supported devices, ensure port 8888 is allowed through any network firewalls between the device and the internet.
- Replace APN placeholders with the exact values provided by your SIM carrier before sending SMS commands.

## Why Use Plaspy with This Configuration

Using the Meitrack T366 with Plaspy gives fleet and asset managers reliable telemetry and real time location visibility in a platform that accepts a shared server endpoint and automatically detects tracker protocols. The T366’s rugged design, relay immobilizer, RS232 telemetry support, offline buffer, and OTA capability combine with Plaspy’s ingestion and analytics to support continuous monitoring, anti-theft workflows, and operational reporting.

To learn more about Plaspy and how it integrates with a wide range of trackers visit https://www.plaspy.com. For the latest device specific command syntax, firmware behavior, and detailed installation guidance verify current information on the manufacturer website https://www.meitrack.com/
