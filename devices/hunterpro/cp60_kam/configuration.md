---
slug: /hunterpro/cp60_kam/configuration
id: cp60_kam-configuration
sidebar_label: Configuration
title: HunterPro - CP60-KAM Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for using the HunterPro CP60-KAM tracker with Plaspy shared server settings and automatic protocol detection
keywords:
  - HunterPro CP60-KAM configuration
  - HunterPro CP60-KAM setup
  - CP60-KAM Plaspy configuration
  - CP60-KAM tracking software configuration
  - HunterPro GPS platform setup
  - CP60-KAM camera panic event
  - Plaspy tracker configuration
  - vehicle tracking platform setup
  - fleet tracking CP60-KAM
  - GPS tracker server settings
---

# HunterPro - CP60-KAM Configuration

This page documents the public configuration context for using the HunterPro CP60-KAM tracker with Plaspy. It focuses on the shared, public server settings and the practical steps you will typically follow to point the device to Plaspy so it can report location and event data into the platform. The CP60-KAM includes image capture capabilities and can automatically capture an image when a Panic Event occurs; this page explains how to ensure the tracker communicates with Plaspy so those events and images are delivered.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps for the CP60-KAM can vary by firmware revision, hardware variant, installation type, and the configuration tool used by the installer or vendor. Use the guidance here to apply Plaspy settings in the HunterPro configuration tool, and consult HunterPro documentation for device specific controls such as camera and panic event options.

## Configuration Overview

The goal of this configuration process is to prepare the CP60-KAM to communicate reliably with Plaspy so that location, status, and image capture events are visible in the platform. Below are the practical outcomes you should expect from following the configuration steps.

- Point the CP60-KAM to the Plaspy server so the device can send telemetry and event data.
- Choose the transport option supported by the tracker and Plaspy and set the shared port value.
- Verify the device registers and reports to Plaspy so location and panic image events appear in the account.
- Ensure camera and Panic Event settings on the CP60-KAM are enabled if you want automatic image capture.
- Validate connectivity and correct reporting in the Plaspy interface after configuration.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the CP60-KAM:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices, so port 8888 is the shared value you should apply when asked for the platform port.

## Typical Requirements Before Setup

- Physical access to the CP60-KAM or to the installer who will perform the configuration
- Access to the HunterPro configuration method required by the device such as the vendor software, web tool, or hardware interface
- Power applied to the tracker and any peripheral components needed for normal operation, including camera power if separate
- A Plaspy account or access to the Plaspy platform to verify device visibility after setup
- Confirmation of the device firmware version and any vendor release notes that affect configuration fields
- Reliable network connectivity as required by the tracker to reach the Plaspy endpoint

## How This Tracker Connects to Plaspy

When configured for Plaspy, the CP60-KAM will send location updates, device status, and event notifications to the shared Plaspy endpoint and port. Plaspy receives the incoming data, automatically identifies the protocol the tracker is using, and displays reported locations and events in the platform.

- The CP60-KAM is configured to report to the Plaspy server domain or IP and to use port 8888.
- The device may be set to use UDP or TCP transport depending on the configuration tool and installer preference.
- Panic Event image captures (camera events) are sent as event data so images are associated with the event in Plaspy when supported by the feed.
- Plaspy performs automatic protocol detection so explicit protocol selection is only required if the device firmware asks for it.
- Successful reporting makes the tracker visible in Plaspy for monitoring and operational oversight.

## Common Configuration Workflow

1. Access the official HunterPro configuration method or software for the CP60-KAM as provided by the vendor or installer.
2. Enter d.plaspy.com or 54.85.159.138 as the server destination in the device network settings.
3. Set the port to 8888 which is the shared Plaspy port used for all supported devices.
4. Choose UDP or TCP transport if the configuration interface requires a transport selection.
5. Enable or verify camera and Panic Event settings on the CP60-KAM if you want automatic image capture with alerts.
6. Apply or save the configuration in the HunterPro tool and restart the device if the tool or device requires a reboot.
7. Validate that the device reports to Plaspy by checking the device list and recent events in your Plaspy account.

## Example Configuration Commands

The CP60-KAM configuration method and commands vary by HunterPro firmware and the configuration tool provided by the vendor. Plaspy supports the public server settings above, but the exact command syntax or GUI fields is controlled by HunterPro. Refer to the HunterPro configuration tool or documentation for the precise commands or menu fields used to set the server domain, IP, port, transport, and event options.

## Configuration Notes

- Firmware differences can change field names and the exact configuration workflow. Confirm the firmware version before following steps verbatim.
- If the device configuration presents both domain and IP fields, you can use either d.plaspy.com or 54.85.159.138; both point to the Plaspy service.
- Choosing UDP or TCP may affect delivery behavior; Plaspy will detect the protocol automatically, but select the transport required by the CP60-KAM firmware or your network design.
- Camera and Panic Event options are device level features; enable and test them in the HunterPro tool so image captures are transmitted when events occur.
- Always verify connectivity by checking the device status in Plaspy after saving settings and restarting the tracker if needed.

## Why Use Plaspy with This Configuration

Using the HunterPro CP60-KAM with Plaspy provides a straightforward path to collect location, event, and image capture data into a single monitoring platform. For organizations that need visibility into vehicle movements and a visual record during panic or alarm events, routing CP60-KAM telemetry to Plaspy centralizes incidents and tracking data for easier review and operational response.

To learn more about Plaspy and the platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware details, and manufacturer guidance verify information with HunterPro at http://hunterpro.com.tw/ since vendor instructions and firmware behavior can change over time.
