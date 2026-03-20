---
slug: /gnxis/4_wire/features
id: 4_wire-features
sidebar_label: Features
title: Gnxis - 4-wire Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Gnxis 4-wire GPS tracker and how it can be used with Plaspy for vehicle and fleet monitoring
keywords:
  - Gnxis 4-wire
  - Gnxis 4 wire features
  - Gnxis 4-wire GPS tracker
  - Gnxis tracker Plaspy
  - 4-wire tracker features
  - Gnxis GPS capabilities
  - vehicle tracking Gnxis
  - fleet tracking Gnxis
  - Gnxis features Plaspy
  - Gnxis real time tracking
---

# Gnxis - 4-wire Features

This page provides a public feature overview for the Gnxis 4-wire GPS tracker with emphasis on practical behavior and how it integrates with Plaspy. It summarizes the device capabilities described by the manufacturer and explains what to expect when using a compatible Gnxis tracker in Plaspy for monitoring, alerts, and location visibility.

Exact feature availability and behavior can vary by firmware version, hardware revision (for example 4-wire versus 8-wire connectors), installation method, and manufacturer implementation. Optional functions listed by the manufacturer may require specific wiring, firmware settings, or regional hardware variants, so always check device documentation for the precise capabilities of your unit.

## Feature Overview

The Gnxis 4-wire tracker is designed for continuous position reporting and event notification on LTE/GSM/GPRS networks. It targets private vehicles, commercial fleets, and motorcycles where stable connectivity and clear operational alerts are required.

- Real time tracking with frequent location updates for active vehicles and assets
- Ignition and movement alarms to record and notify start and stop events
- Speeding and ACC detection reported as events for driver behavior monitoring
- Angle based location updates that refresh position when heading changes improve tracking accuracy on turns
- Power off alarm to notify when external power is disconnected and backup battery status is reported

## Core Features of Gnxis - 4-wire

- Real time GPS tracking compatible with LTE GSM GPRS networks for broad coverage
- Ignition and movement alarm reporting to indicate vehicle start and stop events
- Speeding detection and ACC status reporting for event-based monitoring
- Angle based location updates to provide more meaningful positions during maneuvers
- Power off alarm that signals loss of external power and relies on the device backup battery
- Optional remote fuel or electricity cut off as noted by the manufacturer; availability depends on unit configuration and installation
- Energy saving mode that reduces GSM and GPS activity when a vehicle is parked to conserve power
- Built in GSM and GPS antennas and GPS sensitivity reported at under 5 meters in open sky conditions

## How These Features Work with Plaspy

When a Gnxis 4-wire tracker is connected to Plaspy, device-reported locations and events appear in the Plaspy platform where they can be monitored and logged for operational oversight.

- Live map tracking shows the device location and movement updates reported by the tracker
- Ignition and movement events are logged so you can filter trips, start times, and stop times
- Speeding and ACC related events appear in the event feed for review and reporting
- Power loss and backup battery events are shown as device status changes in Plaspy
- Optional cut off states reported by the device can be displayed in Plaspy; remote control or command support depends on firmware and installation
- Plaspy detects common tracker protocols automatically and integrates reported location and event data into the platform dashboard

## Typical Use Cases

- Monitoring private cars for location and basic security alerts
- Managing commercial fleets with real time tracking and event logging for trips
- Motorcycle tracking where compact hardware and reliable reporting are important
- Tracking vehicles that require alerts for power removal or unexpected shutdowns
- Using angle based updates to improve position relevance on route turns and urban driving
- Reducing reporting frequency when parked to conserve vehicle and device power

## Feature Availability Notes

- Manufacturer firmware and hardware revisions can enable or disable optional features such as remote cut off or specific alarm behaviors
- Connector configurations (4-wire vs 8-wire) affect which inputs and outputs are available during installation
- Regional cellular band support and network availability will affect connectivity and should be checked for your deployment area
- Energy saving mode alters reporting intervals; last known position and event timing can differ from always-on tracking
- Verify which features are enabled on your specific device and revision by consulting the manufacturer documentation for your unit

## Why Use Plaspy with These Features

Using Plaspy with a compatible Gnxis 4-wire tracker centralizes location and event data so organizations can maintain situational awareness across vehicles and assets. Plaspy provides a consolidated view of real time positions, event history, and device status that supports operational oversight, dispatcher workflows, and basic security monitoring.

To learn more about Plaspy and how it can work with Gnxis trackers, visit https://www.plaspy.com. Device features, firmware behavior, and manufacturer details can change over time; please verify the latest, device specific information on the manufacturer official website.
