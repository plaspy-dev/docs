---
slug: /trackerking/ec33/configuration
id: ec33-configuration
sidebar_label: Configuration
title: TrackerKing - EC33 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TrackerKing EC33 showing how to point the device to Plaspy for real time tracking and telemetry
keywords:
  - TrackerKing EC33
  - EC33 configuration
  - EC33 setup for Plaspy
  - GT06 protocol configuration
  - Plaspy server configuration
  - GPS tracker setup
  - vehicle tracking EC33
  - EC33 integration guide
  - EC33 server settings
  - fleet tracking EC33
---

# TrackerKing - EC33 Configuration

This page provides the public configuration context for using the TrackerKing EC33 with Plaspy. It summarizes the practical server values and setup workflow needed to point an EC33 tracker at Plaspy so the device can stream position, event, and telemetry data into the platform. Use this guide alongside TrackerKing product documents for device specific steps.

Plaspy uses a shared server endpoint and the same port for all devices it supports and it automatically detects tracker protocol when telemetry arrives. Manufacturer side configuration steps for the EC33 can vary by firmware, hardware revision, installation method, or the vendor tool used to make changes, so confirm any device specific commands or menus against TrackerKing documentation before applying changes.

## Configuration Overview

Configuring an EC33 for Plaspy is primarily about directing the device to the Plaspy server and ensuring reliable cellular connectivity so the tracker can send real time location and event streams. The EC33 uses the GT06 protocol for broad compatibility and supports features such as offline caching and blind area retransmission that improve data continuity.

- Point the EC33 server entry to Plaspy so telemetry is sent to the correct endpoint.
- Set the communication port and transport (UDP or TCP) that the tracker uses to connect to Plaspy.
- Verify cellular connectivity and data plan so the device can establish and maintain a session.
- Save and apply configuration, then confirm the tracker reports to Plaspy and that position and event streams appear in the platform.
- Validate cached history replay after a network outage to ensure recovered points are delivered to Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device connects  
- Note: All devices in Plaspy use the same port so configuring port 8888 is consistent across models

## Typical Requirements Before Setup

- Confirm the EC33 has a working SIM card with an active data plan and that 4G service is available at the installation location.  
- Ensure the EC33 is powered and wired correctly for the intended vehicle installation.  
- Obtain access to TrackerKing configuration tools or the manufacturer recommended method for the EC33 such as USB configuration, the vendor app, or other official utilities.  
- Have Plaspy account or fleet onboarding details available so you can validate the device after setup.  
- Check current EC33 firmware version and review TrackerKing release notes for any configuration changes that affect server settings.  
- Physical access to the device may be required to apply certain configuration changes or restart the unit.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the EC33 sends position fixes, status events, and telemetry to the shared Plaspy server endpoint on the common port. Plaspy interprets GT06 protocol payloads and presents live maps, alerts, and trip history. Because the EC33 supports an on device cache and blind area retransmission, recovered historical points are relayed to Plaspy once connectivity returns.

- The EC33 is set to report to d.plaspy.com (or 54.85.159.138) on port 8888.  
- Data transport can use UDP or TCP depending on device options; configure the same transport on the tracker.  
- Plaspy auto detects the GT06 protocol and other supported protocols, so the platform will parse incoming telemetry automatically.  
- Events such as ignition changes, geo fence breaches, overspeed, and alarms are forwarded to Plaspy for alerting and reporting.  
- Offline cached routes stored on the EC33 are transmitted to Plaspy after reconnection for complete history playback.

## Common Configuration Workflow

1. Access the official TrackerKing configuration method for the EC33 (USB tool, vendor app, or other manufacturer utility).  
2. Locate the server or remote host settings in the device configuration interface.  
3. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138.  
4. Set the device port to 8888.  
5. Choose UDP or TCP if the device requires a transport selection.  
6. Apply or save the configuration and follow any on device prompts to commit changes.  
7. Restart the EC33 if required by the configuration tool or firmware to establish a fresh connection.  
8. Validate the tracker has reported to Plaspy by checking for incoming GPS positions and events in your Plaspy account or the platform view.

## Example Configuration Commands

The EC33 supports multiple configuration methods and the exact commands or menu steps depend on TrackerKing firmware and the tool used. Manufacturer tools may provide SMS commands, a desktop USB utility, or an app interface. Because model specific commands can change with firmware and vendor tools, follow the official TrackerKing configuration guide for exact command syntax and order.

If you are using vendor supplied SMS commands or a USB configuration tool, apply the Plaspy server values from this page (d.plaspy.com or 54.85.159.138, port 8888, UDP/TCP) in the appropriate server/host and port fields.

## Configuration Notes

- Firmware differences can change menu names and the exact place where server settings are entered; always confirm with the EC33 release notes.  
- TCP may be preferable where session reliability and retransmission are desired; UDP can be lighter weight and is commonly used for tracker telemetry. Choose transport per your network and device capabilities.  
- The EC33 supports cached storage and blind area retransmission; after configuring the server make sure to test history replay for recovered points.  
- Dual IP and IP lock options mentioned in TrackerKing materials can be used for redundancy; configure primary Plaspy endpoint first and consult TrackerKing docs for secondary server behavior.  
- Keep a copy of any configuration commands or SMS templates you use and label placeholders clearly for future deployments.

## Why Use Plaspy with This Configuration

Pointing a TrackerKing EC33 at Plaspy delivers a practical path to real time vehicle visibility, event monitoring, and route history playback for fleets and individual vehicle tracking. Plaspy’s automatic protocol detection and the shared server port simplify integration so you can standardize on one server endpoint for multiple device models while still receiving rich telemetry and event streams from the EC33.

Learn more about how Plaspy handles device integrations and fleet workflows at https://www.plaspy.com. For the most current device specific commands, firmware notes, and setup instructions for the TrackerKing EC33 consult the manufacturer site at https://trackerking.cn/ to verify methods and behavior have not changed.
