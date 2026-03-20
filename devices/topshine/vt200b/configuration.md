---
slug: /topshine/vt200b/configuration
id: vt200b-configuration
sidebar_label: Configuration
title: TopShine - VT200B Configuration
sidebar_class_name: menu_item_tracker
description: Connect and configure the TopShine VT200B GPS tracker for use with Plaspy using public server settings and SMS or GPRS commands
keywords:
  - TopShine VT200B configuration
  - TopShine VT200B setup
  - VT200B Plaspy integration
  - TopShine GPS tracker configuration
  - VT200B server configuration
  - Plaspy device setup
  - VT200B SMS GPRS setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - VT200B integration guide
---

# TopShine - VT200B Configuration

This page documents the public configuration context for connecting the TopShine VT200B GPS tracker to the Plaspy platform. It gathers the practical server settings, recommended workflow, and the manufacturer SMS commands that are commonly used to prepare the device for real time tracking with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The VT200B supports SMS and GPRS (TCP or UDP) configuration, and the examples below use the public commands and placeholders provided by the manufacturer where available.

## Configuration Overview

The configuration process prepares the VT200B to communicate with Plaspy so the tracker can report position, status, and sensor events reliably. These steps use either SMS commands or the device's configuration tool to set the APN, server endpoint, transport mode, and reporting interval.

- Configure the APN for the SIM card so GPRS data can be sent.
- Point the tracker to the Plaspy server endpoint and set port 8888.
- Select UDP or TCP transport if the device requires explicit transport selection.
- Verify the device password and device ID are correct before activating GPRS.
- Confirm the device reports to Plaspy and that logged records upload after reconnection.
- Use manufacturer SMS commands for quick remote setup when a configuration tool is not available.

## Plaspy Server Settings

Use the following public server settings when configuring the VT200B for Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the canonical Plaspy endpoint and must be entered on the device or sent via SMS according to the device command format.

## Typical Requirements Before Setup

- A powered and accessible VT200B device with an active SIM card that supports GPRS data and SMS.
- Knowledge of the SIM operator APN and optional APN username and password.
- Access to the device IMEI and the device configuration method (SMS commands or manufacturer software).
- The device default password if not changed (manufacturer sample shows default password 000000).
- A method to receive or monitor device confirmation messages (SMS responses) or a Plaspy account to validate incoming reports.
- Patience to check firmware notes or vendor guidance if commands differ by firmware revision.

## How This Tracker Connects to Plaspy

The VT200B sends GPS coordinates and telemetry to the Plaspy shared server endpoint over GPRS using TCP or UDP. When network connectivity is lost, the device stores records locally and uploads them automatically when the connection is restored, ensuring continuity in Plaspy dashboards.

- The device is configured to report to the Plaspy server endpoint and port 8888.
- Telemetry and event data are forwarded to d.plaspy.com or 54.85.159.138 using the selected transport.
- Plaspy automatically detects the tracker protocol and ingests position and status messages.
- Logged records stored in the internal memory upload to Plaspy once GPRS connectivity is available.
- Alerts such as SOS, geo‑fence events, and I/O alarms are delivered to Plaspy for platform visibility and reporting.

## Common Configuration Workflow

1. Access the official TopShine configuration method or software, or prepare to send SMS configuration commands per the manufacturer instructions.
2. Ensure the SIM is active, the APN is known, and the device is powered and reachable by SMS.
3. Enter the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) into the device server settings.
4. Set the server port to 8888.
5. Choose UDP or TCP transport if the device requires explicit transport selection.
6. Apply or save the configuration on the device and restart it if required by the device procedure.
7. Validate that the device reports to Plaspy by checking the Plaspy platform for the device or confirming SMS responses and uploaded logs.

## Example Configuration Commands

The VT200B supports SMS command configuration. The manufacturer sample commands and placeholders are shown below. The example uses the default device password 000000 where \<password> appears in commands.

Note: Keep placeholders such as [apn], [apnu], and [apnp] unchanged and replace them with your operator APN, APN username, and APN password as needed.

- Reset to factory settings (optional initial step):

```text
W000000,990,099###
```

- Set the device ID using the first 14 digits derived from the IMEI (replace \<14-digit-imei> with the actual 14-digit value):

```text
W000000,010,<14-digit-imei>
```

- Set the operator APN (replace [apn] with your APN; include optional APN username and password if required using [apnu] and [apnp]):

```text
W000000,011,[apn]
```

Optional extended APN command with username and password:

```text
W000000,011,[apn],[apnu],[apnp]
```

- Set the GPRS server to the Plaspy IP and port as provided by Plaspy:

```text
W000000,012,54.85.159.138,8888
```

Alternative using the Plaspy domain instead of the IP:

```text
W000000,012,d.plaspy.com,8888
```

- Switch the device to GPRS mode:

```text
W000000,013,2
```

- Set the update interval (example value shown as 6 in manufacturer sample):

```text
W000000,014,6
```

- Request the device IMEI (verification command):

```text
W000000,601
```

Replace the initial 000000 password with the actual device password if it has been changed from the factory default. When using the APN command, replace the placeholders [apn], [apnu], and [apnp] with your operator values.

## Configuration Notes

- Manufacturer SMS commands may vary by firmware revision; verify the exact SMS syntax in the VT200B user manual or release notes.
- The device supports both SMS and GPRS configuration methods; SMS is convenient for remote or in-field setups when a configuration tool is not available.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so use port 8888 consistently when configuring multiple devices.
- When choosing transport, TCP or UDP can be selected if the device requires it; behavior and reliability can depend on firmware and network conditions.
- Keep a copy of the device IMEI and the configured device ID so you can map the physical unit to the Plaspy platform during validation.

## Why Use Plaspy with This Configuration

Using the TopShine VT200B with Plaspy gives fleets a straightforward path to centralized tracking, event monitoring, and historical playback. The VT200B’s support for GPRS TCP/UDP and SMS, combined with its internal logger, helps maintain continuous data for operational oversight and incident analysis when network conditions vary.

To learn more about Plaspy and the platform capabilities, visit https://www.plaspy.com. For the latest VT200B device specific setup details, firmware notes, and manufacturer guidance confirm current information on the official TopShine site https://www.gztopshine.com/. Manufacturer specifications and configuration methods can change over time so verify commands and procedures against the latest documentation.
