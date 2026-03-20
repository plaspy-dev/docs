---
slug: /tk_star/tkobd/configuration
id: tkobd-configuration
sidebar_label: Configuration
title: TK-Star - TKOBD Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TKOBD to connect with Plaspy using shared server settings and SMS based setup options
keywords:
  - TK-Star TKOBD configuration
  - TKOBD Plaspy setup
  - TKOBD server configuration
  - TKOBD GPS tracker setup
  - TKOBD OBD tracker Plaspy
  - TKOBD APN settings
  - TKOBD SMS commands
  - vehicle tracking TKOBD
  - fleet tracking TKOBD Plaspy
  - TKOBD GPRS configuration
---

# TK-Star - TKOBD Configuration

This page documents the public configuration context for using the TKOBD OBD plug‑in GPS tracker with Plaspy. It summarizes the practical server settings Plaspy requires, the common setup workflow, and the SMS commands published for TKOBD devices so you can prepare the tracker to report to Plaspy’s backend services.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps for the TKOBD can vary by firmware, hardware revision, installation type, and vendor configuration tools. The TKOBD supports SMS based configuration commands and GPRS reporting, and this page shows the publicly available commands and guidance needed to register the device with Plaspy.

## Configuration Overview

Configuring the TKOBD for Plaspy is about establishing reliable GPRS connectivity, pointing the device at Plaspy’s server endpoint, and confirming the device sends periodic location updates. The example SMS commands below are the publicly documented method for many TKOBD units and demonstrate the typical fields you will set.

- Prepare the device to use the operator APN and, if required, APN credentials so the tracker can access GPRS.
- Set the Plaspy server endpoint and port so the device knows where to send telemetry.
- Configure the upload interval so the tracker reports position updates at an appropriate cadence for your fleet.
- Switch the device to GPRS reporting mode and validate the device is visible in Plaspy.
- Use the SMS commands shown below or the official TK‑Star configuration tool as provided by the vendor to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint details required for the TKOBD to report location and telemetry to your Plaspy account. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A functional TKOBD device plugged into the vehicle OBD port and receiving power from the vehicle.
- An active SIM card with data enabled and the correct APN for the mobile operator.
- Access to the device configuration method used by TK‑Star such as SMS commands or vendor configuration tools.
- Knowledge of the device password if required for configuration (the public default password in TK‑Star documentation is 123456).
- A phone capable of sending SMS messages to the device if using SMS based setup.
- Access to Plaspy credentials and account to validate that the device appears in the platform after configuration.

## How This Tracker Connects to Plaspy

When configured, the TKOBD sends location and status data over GPRS to the Plaspy backend where it is ingested and displayed in real time. The device reports periodically based on the configured upload interval and raises alarms for configured events which Plaspy then surfaces in the platform.

- The tracker is pointed to the shared Plaspy server endpoint and port for telemetry delivery.
- Regular upload messages report position and movement to Plaspy for live tracking.
- Event messages such as vibration, movement, geo‑fence breaches, and overspeed are sent to Plaspy as alerts.
- Plaspy stores route history and telemetry for operational review and reporting.
- Protocol detection is handled by Plaspy, so the tracker can use UDP or TCP on the same Plaspy port.

## Common Configuration Workflow

1. Access the official TK‑Star configuration method documented by the manufacturer, typically SMS commands or the vendor tool.  
2. Configure the mobile data APN on the device using the APN command and any APN username or password required by your operator.  
3. Enter the Plaspy server address by specifying d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings as supported by your device interface.  
4. Set the server port to 8888 and choose UDP or TCP if the device requires transport selection.  
5. Apply or save the configuration on the device and switch to GPRS reporting mode if required.  
6. Restart the device or cycle vehicle power if recommended by the manufacturer to ensure settings take effect.  
7. Validate in Plaspy that the device appears online and is reporting position updates at the expected upload interval.

## Example Configuration Commands

The following SMS commands are the publicly documented TK‑Star TKOBD commands for initial setup. The sample commands use the device default password 123456 where required. Send each command as an SMS from a phone to the TKOBD device number. Preserve the placeholders when you adapt commands for your operator APN.

- Restore factory settings (optional initial step)
```text
begin123456
```

- Set the operator APN
```text
apn123456 {{apn}}
```
Explanation: replace {{apn}} with your mobile operator APN string.

- Set the APN username (optional)
```text
apnuser123456 {{apnu}}
```
Explanation: replace {{apnu}} with the APN username if your operator requires one.

- Set the APN password (optional)
```text
apnpasswd123456 {{apnp}}
```
Explanation: replace {{apnp}} with the APN password if required.

- Set the GPRS server IP and port to Plaspy
```text
adminip123456 54.85.159.138 8888
```
Explanation: this sets the Plaspy server IP and port. Use this command exactly as shown if your device requires an IP entry.

- Set the update interval to 60 seconds
```text
upload123456 60
```
Explanation: sets the periodic upload interval in seconds. Adjust as needed for your reporting requirements.

- Switch to GPRS mode
```text
gprs123456
```
Explanation: instructs the device to use GPRS reporting after configuration.

Note: The password 123456 is the published default for these example commands. If your device password has been changed, use the current device password in place of 123456. If you do not know the password, follow TK‑Star manufacturer guidance to recover or reset credentials.

## Configuration Notes

- SMS based setup is supported and is shown in the example commands; some installers prefer using TK‑Star vendor tools or configuration clients when available.
- Firmware versions and hardware revisions can change command syntax or available features; verify commands against your device firmware release when possible.
- The device can report using UDP or TCP; choose the transport supported by your deployment and select UDP or TCP on port 8888 as required.
- Confirm APN, APN username, and APN password values with your mobile network operator before applying them to the tracker.
- Keep the device password secure and record changes you make during installation; the public default password is documented as 123456.

## Why Use Plaspy with This Configuration

Using the TKOBD with Plaspy delivers centralized visibility into vehicle location, event alerts, and historical routes so fleet operators can monitor assets, respond to incidents, and analyze driver behavior from a single platform. The OBD plug‑in form factor simplifies installation, while Plaspy aggregates telemetry and alarms for operational workflows like dispatch, security, and compliance.

Learn more about Plaspy and how it manages device connections and fleet visibility at https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer procedures for the TKOBD consult the official TK‑Star documentation at https://www.tk-star.com/ as manufacturer specifications and setup methods may change over time.
