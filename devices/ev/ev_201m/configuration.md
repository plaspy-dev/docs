---
slug: /ev/ev_201m/configuration
id: ev_201m-configuration
sidebar_label: Configuration
title: EV - EV-201M Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EV EV-201M setup with Plaspy server settings and example SMS commands
keywords:
  - EV EV-201M configuration
  - EV EV-201M setup
  - EV EV-201M Plaspy
  - EV EV-201M server configuration
  - EV tracker configuration
  - pet tracker Plaspy setup
  - GPS tracker server settings
  - LTE-M NB IoT tracker setup
  - EV-201M SMS commands
  - tracker platform integration
---

# EV - EV-201M Configuration

This page documents the public configuration context for using the EV-201M tracker with the Plaspy platform. It collects the Plaspy server settings you will need and practical instructions that relate to the EV-201M public setup flow, including example SMS configuration commands that are commonly used with this model.

Plaspy uses shared server settings across all supported devices and will automatically detect the tracker protocol once the device is pointed to the Plaspy endpoint. Exact manufacturer-side steps to change server, APN, or transport options can vary by firmware version, hardware revision, installer tools, and regional device variants, so follow the EV manufacturer guidance when available.

## Configuration Overview

The goal of EV-201M configuration for Plaspy is to prepare the tracker to send GNSS positions and telemetry to the Plaspy cloud endpoint so the device appears and reports correctly in the Plaspy platform. This involves setting the device time zone or clock, configuring operator APN for cellular data and SMS, and ensuring the device server and transport settings reference Plaspy.

- Set device time zone and clock so reported timestamps align with Plaspy dashboards.
- Configure the cellular APN (and optional APN username and password) so the device can use mobile data.
- Point the tracker to the Plaspy server endpoint and port so reports reach the platform.
- Select transport (UDP or TCP) if the device requires a transport choice before sending.
- Verify the device reports to Plaspy and visible in the platform map and telemetry panels.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and the same port is used for all supported devices

## Typical Requirements Before Setup

- A charged or powered EV-201M device with battery ready for configuration.
- A SIM card provisioned for LTE‑M or NB‑IoT data and SMS as required by the device and local operator.
- Access to the EV manufacturer configuration method such as SMS setup or official configuration software.
- The device default password if using SMS configuration is 123456 (as shown in public commands).
- Knowledge of the operator APN and optional APN username and password for your cellular provider.
- Contact details for the manufacturer or vendor if features such as server change require enabling by the manufacturer.

## How This Tracker Connects to Plaspy

The EV-201M sends GNSS positions and device telemetry over the cellular network (LTE-M or NB) to the Plaspy cloud. Once the tracker is configured with the Plaspy endpoint and port, Plaspy receives periodic position reports and event messages so the device can be monitored in real time.

- Device reports GNSS positions and telemetry over LTE-M or NB to the Plaspy endpoint.
- Reports are sent to d.plaspy.com or the Plaspy server IP and arrive on port 8888.
- Transport may be UDP or TCP depending on device firmware and configuration selection.
- Plaspy automatically detects the tracker protocol so the device can be recognized without manual protocol selection in the platform.
- Once reporting, Plaspy displays live location, historical tracks, and alerts for the device.

## Common Configuration Workflow

1. Access the official EV manufacturer configuration method or software. For many EV-201M units this is SMS-based setup or vendor tools; follow the official EV documentation.
2. Configure the device time zone or clock so timestamps match your Plaspy account expectations.
3. Enter the operator APN information using the manufacturer SMS command or software using the placeholder values for APN, APN username, and APN password.
4. Enter d.plaspy.com or the Plaspy server IP 54.85.159.138 into the server field in the device settings.
5. Set port 8888 for the tracker server setting; Plaspy uses port 8888 for all supported devices.
6. If the device requires a transport choice, select UDP or TCP for communication on port 8888.
7. Apply or save the configuration, restart the device if required by the manufacturer, and confirm the device is reporting to Plaspy.

## Example Configuration Commands

The EV manufacturer provides public SMS commands for basic setup. Below are the example SMS commands as published for EV-201M. The default device password shown in these examples is 123456.

- Set the time zone to UTC 0
```text
123456L+00
```

- Set the operator APN. Replace {{apn}} with your operator APN. If your APN needs a username or password, include {{apnu}} and {{apnp}} as applicable.
```text
123456S1,{{apn}}
```
Or with APN username and password:
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
(Placeholders: {{apn}} is required for data. {{apnu}} and {{apnp}} are optional and used only if your operator requires them.)

- Set the device server. The published sample uses the Plaspy server IP and port. Note that EV documentation indicates you may need to contact the manufacturer to enable the option to change the server before this command is accepted.
```text
123456I1,54.85.159.138,8888
```

Important notes about the commands above:
- The SMS password 123456 is the default shown in public configuration examples. If your device password was changed, use the current device password instead.
- The server command contains the Plaspy server IP example. You can also use the domain d.plaspy.com in manufacturer tools if supported, but the sample command above uses the IP as published.
- Contact the manufacturer or vendor if the device rejects server change commands; some firmware versions or stock settings require vendor enablement.

## Configuration Notes

- SMS based setup is publicly documented for EV-201M, but manufacturer tools or desktop utilities may also be available; use the official EV guidance for your unit.
- Firmware differences or hardware revisions may change the exact command syntax or features; verify commands against the EV documentation for your device firmware.
- Choosing UDP versus TCP is a device option; Plaspy accepts both and automatically detects protocol once reports reach the server on port 8888.
- The APN placeholders {{apn}}, {{apnu}}, and {{apnp}} must be replaced with operator values when sending SMS commands; leave username or password out if not required.
- Some EV-201M units require the vendor to enable the ability to change the server address; contact the manufacturer if you cannot set the server using SMS.

## Why Use Plaspy with This Configuration

Using the EV-201M with Plaspy centralizes location, telemetry, and event reporting so pet owners and operators can view live positions, history, and alerts in one place. Plaspy’s automatic protocol detection and consistent use of port 8888 simplify integration across mixed device fleets, while the EV-201M delivers the pet tracking features needed to report frequent updates and activity information.

To learn more about how Plaspy works with devices like the EV-201M, visit https://www.plaspy.com. Manufacturer specifications and configuration steps can change over time; please verify the latest EV-201M setup details and firmware behavior on the official EV website http://www.eviewltd.com/ before final deployment.
