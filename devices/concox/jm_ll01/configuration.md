---
slug: /concox/jm_ll01/configuration
id: jm_ll01-configuration
sidebar_label: Configuration
title: Concox - JM-LL01 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure Concox JM-LL01 for use with Plaspy including server settings SMS commands and verification steps
keywords:
  - Concox JM-LL01 configuration
  - JM-LL01 setup
  - Concox tracker Plaspy
  - JM-LL01 server configuration
  - Concox GPS tracker setup
  - Plaspy device configuration
  - JM-LL01 SMS setup
  - Concox asset tracker setup
  - JM-LL01 LTE NB IoT setup
  - fleet management tracker configuration
---

# Concox - JM-LL01 Configuration

This page documents the public configuration context for using the Concox JM-LL01 tracker with Plaspy. It gathers the practical server settings and SMS configuration commands that are commonly used to point this model at Plaspy, and explains what you should check before attempting integration. The content here reflects publicly available setup information and the included SMS commands that installers frequently use.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflow below as practical, public guidance rather than the only possible method. Where applicable this guide preserves placeholders such as [apn], [apnu], and [apnp] so you can substitute operator values during setup.

## Configuration Overview

This configuration process prepares the JM-LL01 to communicate reliably with Plaspy so the device can deliver location and telemetry data to the platform. The steps below focus on setting the server endpoint, choosing transport, ensuring cellular data is active, and validating reporting to Plaspy.

- Configure the device to use the Plaspy server endpoint and port so telemetry is routed to the platform.
- Apply APN and GPRS settings so the tracker can attach to the mobile network and send data.
- Choose and confirm transport (UDP or TCP) as required by the tracker firmware and network.
- Verify the device reports to Plaspy and check connectivity with a verification command.
- Save configuration and restart the device if required to begin reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered JM-LL01 with a valid SIM card installed and active mobile data allowance for GPRS or NB-IoT/LTE as applicable.
- Access to the device configuration method supported by the unit: SMS, mobile app, BLE local configuration, or PC tool depending on model firmware and tooling.
- The correct APN information for the chosen mobile operator (use the [apn], [apnu], [apnp] placeholders if required).
- Ability to send and receive SMS if using SMS-based configuration and a charged battery or temporary power source.
- A basic test plan to validate reporting to Plaspy after configuration (see verification command below).

## How This Tracker Connects to Plaspy

When configured for Plaspy, the JM-LL01 sends GNSS positions and sensor telemetry to the shared Plaspy server endpoint and port so the platform can ingest and display live and historical data. Plaspy then processes those messages, applies protocol parsing, and presents location, alerts, and telemetry in the dashboard.

- The tracker is set to report to d.plaspy.com or the equivalent Plaspy server IP at port 8888.
- Transport can be UDP or TCP; choose the transport supported by the device firmware and network.
- Plaspy automatically detects the tracker protocol so the same server and port work for supported devices.
- Location and event messages are forwarded to Plaspy for live tracking, alerts, and historical logs.
- Successful reporting enables geofence, alerting, and reporting workflows inside Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the JM-LL01 (SMS, BLE mobile app, Tracksolid Pro, or PC tool) depending on your device and firmware.
2. Enter the Plaspy server address by setting the server to d.plaspy.com or the server IP 54.85.159.138.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. If the device requires a transport selection, choose UDP or TCP according to your installation needs.
5. Configure APN and any required operator credentials using the provided placeholders or operator values.
6. Apply or save the configuration and restart the tracker if required by the tool or SMS command set.
7. Validate that the device reports to Plaspy using a verification command or by checking device status in Plaspy after a short reporting interval.

## Example Configuration Commands

The JM-LL01 supports SMS-based configuration. Below are the commonly used public SMS commands in order. Send each command as an SMS to the device number. Preserve the placeholders when substituting your operator values.

- Reset factory settings (optional initial step)
```text
FACTORY#
```

- Set the time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN (replace [apn], [apnu], [apnp] as required)
```text
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator APN. [apnu] and [apnp] are optional APN username and password placeholders; include them only if your operator requires credentials.

- Set the GPRS server using the Plaspy domain (UDP/TCP transport selection is device dependent)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy server IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update/report interval to every 60 seconds (alternatively a two-value form)
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify GPRS and server parameter settings
```text
GPRSSET#
```

Send commands in the order shown when following an initial setup sequence. Use the factory reset command only when you need to clear previous settings.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or available features; always validate commands on a single device before mass deployment.
- The device supports SMS-based configuration as shown above; BLE, mobile app, or PC tools may provide alternative GUI-based workflows.
- Choose UDP or TCP based on network reliability and ISP restrictions; both transports are supported when pointing to Plaspy on port 8888.
- Preserve and substitute placeholders such as [apn], [apnu], and [apnp] with operator values when configuring the SIM/APN.
- All devices in Plaspy use the same port and Plaspy will automatically detect the tracker protocol so you can use the shared Plaspy server endpoint.

## Why Use Plaspy with This Configuration

Using the JM-LL01 with Plaspy gives organizations consolidated visibility into location, sensor telemetry, and event alerts across long-life remote assets. The JM-LL01's low-power connectivity options and on-device logging pair well with Plaspy's platform features to ensure continuous reporting, alerting, and historical track recovery when connectivity is intermittent.

To learn more about Plaspy and how it manages device data and alerts, visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and official documentation for the JM-LL01, verify details with the manufacturer at https://www.iconcox.com/ as specifications and setup methods can change over time.
