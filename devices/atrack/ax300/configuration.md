---
slug: /atrack/ax300/configuration
id: ax300-configuration
sidebar_label: Configuration
title: ATrack - AX300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the ATrack AX300 to Plaspy with practical commands and server settings
keywords:
  - ATrack AX300 configuration
  - AX300 Plaspy setup
  - ATrack AX300 server configuration
  - AX300 GPS tracker setup
  - ATrack AX300 OBD configuration
  - AX300 LTE M tracker
  - AX300 fleet tracking setup
  - Plaspy device configuration
  - AX300 telemetry setup
  - ATrack AX300 tracking platform
---

# ATrack - AX300 Configuration

This page documents the public configuration context for using the ATrack AX300 tracker with Plaspy. It summarizes the Plaspy server settings required for connectivity, practical configuration steps, and example device commands from the AX300 public configuration notes so you can prepare the tracker for use with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools; the commands shown below are public examples for the AX300 and should be used as a reference alongside the manufacturer documentation.

## Configuration Overview

This configuration process prepares the AX300 to report GNSS position and vehicle telemetry to Plaspy using the platform's shared server endpoint and port. The goal is to configure reporting events and intervals, set the device into the proper data format, and point its GPRS settings to Plaspy so the platform can automatically interpret the device protocol and show the device in your account.

- Configure event reporting such as ACC/ignition events so Plaspy receives meaningful state changes.
- Set periodic tracking interval to control how often the AX300 sends position updates.
- Put the tracker into the correct data format and network mode required by Plaspy.
- Point the AX300 GPRS server settings to Plaspy so location and telemetry reach the platform.
- Validate connectivity and confirm the device appears in Plaspy after applying changes.

## Plaspy Server Settings

- Server domain d.plaspy.com is the public hostname to use when configuring DNS based addressing.
- Server IP 54.85.159.138 can be used where an IP is required by the device.
- Port 8888 is the single port Plaspy uses for all supported devices.
- Transport support: the device may be configured to use either UDP or TCP on port 8888.
- Plaspy automatically detects the tracker protocol after the device connects to the server and sends its initial packets.

## Typical Requirements Before Setup

- Power the AX300 from the vehicle OBD-II port or a suitable 12V/24V supply and confirm device status LEDs are active.
- A valid cellular SIM with a data plan and correct APN values for your carrier; placeholders are used below for APN, username, and password.
- Access to the official ATrack configuration method such as USB configuration tool, ADM, SMS commands, or the device console depending on your AX300 firmware and toolchain.
- Physical access to the vehicle and OBD-II connector to verify installation and CAN/OBD access if required.
- Optional: a laptop or terminal to send AT style configuration commands if you use direct serial or USB configuration.
- Ensure you have the device's current firmware and the manufacturer's configuration guide available for reference.

## How This Tracker Connects to Plaspy

The AX300 is configured to open a GPRS data session and send its position and telemetry to Plaspy's shared server endpoint and port. Once connected, Plaspy will automatically detect the device protocol and present device location, event states, and telemetry in the platform.

- The tracker reports GNSS fixes and event-driven messages to d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport is established over either UDP or TCP depending on your configuration choice on the device.
- Event reporting (for example ACC on/off) and periodic tracking intervals drive when the AX300 sends data to Plaspy.
- Plaspy receives incoming packets and maps the device protocol automatically so telemetry and location show up in the account.
- Validation of connectivity is done by checking device visibility and recent position updates in Plaspy after configuration.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software appropriate to your AX300 firmware (USB, ADM, SMS or terminal).
2. Enter the Plaspy server address either as d.plaspy.com or the IP 54.85.159.138 depending on the device's server field options.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP on the device if transport selection is required.
5. Configure reporting events and intervals (for example ACC event rules and a 60 second tracking interval) and set the device data format.
6. Apply or save the configuration and restart the AX300 if the device or workflow requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy by observing incoming position updates and device status in the platform.

## Example Configuration Commands

The following sample commands are taken from public AX300 configuration guidance and demonstrate typical steps to configure event reporting, tracking interval, data format, and GPRS server settings. Preserve the placeholders when entering your carrier APN values.

- Set ACC event handling and reporting actions
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set the periodic tracking interval to 60 seconds
```text
AT$TRAC=1,60,,,,,2
```

- Set the output format to binary mode
```text
AT$FORM=1,@P,0,""
```

- Configure the GPRS server pointing to Plaspy
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Notes on placeholders
- [apn] is the carrier APN string required for cellular data.
- [apnu] and [apnp] are optional APN username and password fields; leave empty if your carrier does not require them.

- Check device status (verification)
```text
AT$INFO=?
```

Use these commands via the manufacturer's recommended configuration channel. Depending on your setup, commands may be sent over USB, serial, SMS, or a vendor tool. Always confirm the correct transport for issuing commands on your AX300 firmware.

## Configuration Notes

- Firmware differences and regional variants can change available commands and parameters; verify the exact command syntax for your AX300 revision.
- TCP versus UDP: choose the transport that matches your network and installation needs; Plaspy accepts both on port 8888 and automatically detects the protocol in use.
- Keep APN placeholders intact until replaced with your carrier values; incorrect APN settings will prevent GPRS connectivity.
- Some installers prefer to use ATrack Device Management (ADM) or the vendor USB tool for bulk configuration rather than sending raw AT commands.
- After applying configuration, allow time for the device to register to the mobile network and establish a session to d.plaspy.com or 54.85.159.138.

## Why Use Plaspy with This Configuration

Using the AX300 with Plaspy provides a straightforward path to unify GNSS location, OBD-derived diagnostics, and event reporting in a single fleet management platform. With Plaspy's automatic protocol detection and a shared server endpoint, the AX300 can deliver real-time vehicle visibility, ignition and event alerts, and telemetry-driven insights that help operators reduce downtime and improve fleet operations.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest AX300 instructions and firmware notes on the manufacturer site https://www.atrack.com.tw/ before wide deployment.
